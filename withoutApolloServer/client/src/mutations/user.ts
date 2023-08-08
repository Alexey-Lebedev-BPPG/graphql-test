import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      id
      username
      age
      posts {
        id
        title
        content
      }
    }
  }
`;
// тип берем из схемы бэка
// mutation createUser($input: UserInput) {
// указываем тип как выше
//   createUser(input: $input) {
//     id
//     username
//     age
//     posts {
//       id
//       title
//       content
//     }
//   }
//}
// тем самым мы запишем юзера и получим его обратно с полями id, username, age и posts
