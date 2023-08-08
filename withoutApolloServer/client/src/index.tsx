import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  // добавляем наш роут апи
  uri: 'http://localhost:5000/graphql',
  // добавляем функцию кеширования
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // оборачиваем все в провайдер, чтоб граф заработал
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
