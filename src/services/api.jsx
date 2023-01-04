import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://soft.silverscreen.by:8443/wssite/webapi/event/',
  responseType: 'json',
  headers: {},
});
