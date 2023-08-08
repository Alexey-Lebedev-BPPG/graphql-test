// создаем root, в котором будем указывать все резолверы для запросов
// сейчас не будем подключать БД, просто будем получать данные из массива users

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

const users: User[] = [{id: '1', username: 'Vasia', age: 25}];

export const root = {
  getAllUsers: () => users,
  getUserById: ({id}: {id: string}) => users.find((user) => user.id === id),
  createUser: ({input}: {input: User}) => {
    // имитируем создание юзера
    const userId = String(Date.now());
    // @ts-ignore
    const user = {id: userId, ...input};
    users.push(user);
    return user;
  },
};

// чтоб получить необходимые поля в редакторе пишем такую конструкцию
// query{
//   getAllUsers{
//     id, username, age
//   }
// }
// тем самым мы получим всех пользователей с этими параметрами

// чтобы сделать мутацию (записать объект) в редакторе пишем
// mutation{
//   createUser(input: {
//     username: "Petya",
//     age: 24, 
//     posts: [
//       {id: "1", title: "javascript", content: "top"}
//     ]
//   }) {
//     id, username, age, posts {
//       id, title, content
//     }
//   }
// }
// тем самым мы запишем юзера и получим его обратно с полями id, username, age и posts
