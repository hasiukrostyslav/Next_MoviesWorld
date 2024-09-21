const axios = require('axios').default;

const axiosRequest = axios.create({
  baseURL: process.env.THIRD_API_URL,
  params: {
    api_key: process.env.THIRD_API_KEY,
    include_adult: false,
  },
});

module.exports = axiosRequest;
