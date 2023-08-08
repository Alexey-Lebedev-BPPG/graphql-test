import Express from 'express';
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';
import {root} from './resolvers';
// import {ApolloServer} from '@apollo/server';
// import {startStandaloneServer} from '@apollo/server/standalone';

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    // включаем возможность использования graphql
    graphiql: true,
    // добавляем глобальную схему
    schema: schema,
    // добавляем глобальный резолвер
    rootValue: root,
  })
);

// const server = new ApolloServer({typeDefs, resolvers});
// const uri = process.env.DB_URI || '';

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log('MongoDB connected');

//     return startStandaloneServer(server, {
//       listen: {port: 4000},
//     });
//   })
//   .then(({url}: {url: string}) => {
//     console.log(`Server ready at ${url}`);
//   })
//   .catch((error: Express.ErrorRequestHandler) => console.log(error));

app.listen(5000, () => console.log('server start on port 5000'));
