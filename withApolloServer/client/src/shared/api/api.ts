import axios from 'axios';

const api = process.env.API_URL;

const app = axios.create({
  baseURL: api,
  headers: {
    Accept: 'application/json, text/plain, text/event-stream, */*',
    'Content-Type': 'application/json',
  },
  // for cookie
  // withCredentials: true,
});

app.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

app.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response.status === 401) {
      // logic for refresh tokens
    }
    return Promise.reject(error);
  }
);

export default app;
