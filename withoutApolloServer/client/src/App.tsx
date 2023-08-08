import {MouseEvent, useEffect, useState} from 'react';
import './index.css';
import {useMutation, useQuery} from '@apollo/client';
import {GET_ALL_USERS, GET_USER_BY_ID} from './query/user';
import {CREATE_USER} from './mutations/user';

interface Post {
  id: string;
  title: string;
  content: string;
}

interface User {
  id: string;
  username: string;
  age: number;
  posts?: Post[];
}

function App() {
  // воспользуемся хуком для гет запросов, чтоб получить данные всех пользователей
  const {data, loading, error, refetch} = useQuery<{getAllUsers: User[]}>(
    GET_ALL_USERS
    // также вторым параметром может быть объект с опциями. в данном случае с помощью pollInterval у нас запрос бужет вызываться каждые 0.5с
    // {pollInterval: 500}
  );

  // воспользуемся хуком для гет запросов, чтоб получить данные одного пользователя
  const {
    data: dataUser,
    loading: loadingUser,
    error: errorUser,
  } = useQuery<{getUserById: User}>(GET_USER_BY_ID, {
    // вторым аргументом передаем объект опций, в котором в поле с переменными передаем то, что нам необходимо
    variables: {id: 1},
  });

  // выводим в консоль полученные данные одного пользователя
  console.log(dataUser?.getUserById);
  console.log(loadingUser);
  console.log(errorUser);

  const [newUser] = useMutation<{createUser: User}>(CREATE_USER);

  const [users, setUsers] = useState<User[]>([]);

  const [userNameLocal, setUserNameLocal] = useState('');
  const [ageLocal, setAgeLocal] = useState(0);

  // функция создания  юзера
  const addUser = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // берем функцию создания мутации, прокидываем туда объект с полем variables, в котором указываем нашу переменную($input)
    const {data} = await newUser({
      variables: {input: {username: userNameLocal, age: ageLocal}},
    });
    console.log(data?.createUser);
    setUserNameLocal('');
    setAgeLocal(0);
  };

  const getAllUsers = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // позволяет повторно запросить данные
    refetch();
  };

  useEffect(() => {
    // отправляем запрос и записываем данные только, когда загрузка прошла
    if (!loading && data) setUsers(data.getAllUsers);
  }, [data, loading]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <form>
      <input
        value={userNameLocal}
        onChange={(event) => setUserNameLocal(event.target.value)}
        type='text'
      />
      <input
        value={ageLocal}
        onChange={(event) => setAgeLocal(+event.target.value)}
        type='number'
      />
      <div className='btns'>
        <button onClick={addUser}>Создание пользователя</button>
        <button onClick={getAllUsers}>Получение пользователей</button>
      </div>
      {users.map((user) => (
        <div
          className='user'
          key={user.id}
        >{`${user.id}   @@@   ${user.username}   @@@   ${user.age}`}</div>
      ))}
    </form>
  );
}

export default App;
