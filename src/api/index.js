import axios from 'axios';
const API_URL = 'https://bom-order.firebaseio.com/';
const categoryRequest = axios.create({ baseURL: API_URL });

export const apiGetCategory = () => categoryRequest.get('/category.json');

export const apiUpdateCategory = data =>
  categoryRequest.put(`/category.json`, data);
