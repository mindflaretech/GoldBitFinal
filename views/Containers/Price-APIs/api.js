// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0', // Weatherbit API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
