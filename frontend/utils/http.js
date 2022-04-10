import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_API,
  headers: {
    'x-request-token': 'kinobi-api'
  }
});
