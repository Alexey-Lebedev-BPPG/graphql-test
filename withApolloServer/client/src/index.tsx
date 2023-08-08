import {createRoot} from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {StoreProvider} from './app/providers/StoreProvider';
import {ApolloProvider} from './app/providers/ApolloProvider';

const container = document.getElementById('root');

if (!container) throw new Error('Error load app');

const root = createRoot(container);

root.render(
  <Router>
    <StoreProvider>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </StoreProvider>
  </Router>
);

reportWebVitals();
