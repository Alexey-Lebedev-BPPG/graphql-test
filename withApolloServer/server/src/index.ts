import Express from 'express';
import doteEnv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
// import SalesDataSchema from './Schema/SalesDataSchema';
import {resolvers} from './resolvers/resolvers';
import {typeDefs} from './models/typeDef';
// import {generateSalesData} from './Utils/generateSalesData';
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

const app = Express();
doteEnv.config();
app.use(Express.json());
app.use(cors());

const server = new ApolloServer({typeDefs, resolvers});
const uri = process.env.DB_URI || '';

mongoose
  .connect(uri)
  .then(() => {
    console.log('MongoDB connected');

    return startStandaloneServer(server, {
      listen: {port: 4000},
    });
  })
  .then(({url}: {url: string}) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((error: Express.ErrorRequestHandler) => console.log(error));

// generate mock data
// const arr = generateSalesData();
// SalesDataSchema.insertMany(arr)
//   .then(() => {
//     console.log('Data inserted successfully.');
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.error('Data insertion failed: ', err);
//   });
