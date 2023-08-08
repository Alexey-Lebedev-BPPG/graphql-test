import {gql} from '@apollo/client';

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`;
// query{
//   getAllUsers{
//     id, username, age
//   }
// }
// тем самым мы получим всех пользователей с этими параметрами

export const GET_USER_BY_ID = gql`
  query getUser($id: ID) {
    getUserById(id: $id) {
      id
      username
      age
    }
  }
`;

// также существует такая концепция, как фрагменты. они позволяют переиспользовать то, что мы хотим возвращать в разных запросах.
// если запрос у нас выглядит так:
// query {
//   getAllUsers {
//     id
//     username
//     age
//   }
// }
// то мы можем сделать возвращаемые данные переиспользуемыми:
// fragment userWithoutAge on User {
//   id, username, posts {
//     title, content
//   }
// }
// query {
//   getAllUsers {...userWithoutAge  }
// }
// через запятую внутри getAllUsers можно еще докидывать каки-то данные
