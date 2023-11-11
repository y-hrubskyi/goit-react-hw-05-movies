import axios from 'axios';

const API_KEY = '345007f9ab440e5b86cef51be6397df1';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrending = async () => {
  const response = await axios.get(`/trending/all/day`);
  return response.data;
};

export const getSearching = async query => {
  const response = await axios.get(`/search/movie?${query}`);
  return response.data;
};
