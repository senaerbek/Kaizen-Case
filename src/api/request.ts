import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://apiv5test.akilliticaretim.com/api/v5/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config: any) => {
    console.log({requestUrl: config?.url});

    config.headers['X-Country-Id'] = 'TR';
    config.headers['X-Language-Id'] = 'TR';
    axios.defaults.headers['X-Country-Id'] = 'TR';
    axios.defaults.headers['X-Language-Id'] = 'TR';

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
