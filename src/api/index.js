import http from './http';

export default {
  fetchListItems() {
    return http.get('/api/users')
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  },

  fetchItemDetails(id) {
    return http.get(`/api/users/${id}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  },
};
