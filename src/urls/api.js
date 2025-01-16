import axios from 'axios';

const api = axios.create({
  baseURL: 'https://upm-backend-sgq2.onrender.com',
});

export default api;
