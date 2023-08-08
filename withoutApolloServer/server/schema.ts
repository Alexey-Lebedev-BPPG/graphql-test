import {buildSchema} from 'graphql';

export const schema = buildSchema(`

  type User {
    id: ID
    username: String
    age: Int
    posts: [Post]
  }
  type Post {
    id: ID
    title: String
    content: String
  }

  input UserInput {
    id: ID
    username: String!
    age: Int!
    posts: [PostInput]
  }
  input PostInput {
    id: ID
    title: String!
    content: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID): User
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`);

// type User и type Post - обычные типы для запросов
// input UserInput и input PostInput - описание типов для параметров запросов (GET, ! - обязательные поля)
// type Query  - описание типа для ответа (GET)
// type Mutations - описание типа для запроса мутации (в данном случае - создание пользователя). запрос параметрами принимает тип UserInput и ответом присылает User
