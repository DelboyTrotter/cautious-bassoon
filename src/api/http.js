import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BASE_URL;

/*
 Change baseURL to suit your project needs.
 */
const http = axios.create({
  timeout: 5000,
  baseURL: BASE_URL,
});

export default http;
