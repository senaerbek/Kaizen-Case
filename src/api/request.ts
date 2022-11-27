import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.extrazone.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config: any) => {
    console.log({requestUrl: config?.url});

    config.headers['X-Country-Id'] = 'TR';
    config.headers['X-Language-Id'] = 'TR';

    return config;
  },
  (error: any) => {
    Promise.reject(error).then(function (error2) {
      console.log({error2});
    });
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);
