import http from './http';

const loadItemsList = () => http.get('/api/users')
  .then((response) => response.data)
  .catch((error) => Promise.reject(error));

const fetchItemDetails = (id) => http.get(`/api/users/${id}`)
  .then((response) => response.data)
  .catch((error) => Promise.reject(error));

export {
  loadItemsList,
  fetchItemDetails,
};
