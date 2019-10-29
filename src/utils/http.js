import axios from 'axios';

const http = axios.create({
  baseURL: 'http://5db57ce04e41670014ef299e.mockapi.io',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
