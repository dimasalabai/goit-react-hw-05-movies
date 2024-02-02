import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/11',
  params: {
    api_key: '68860e7024beff1d4722639f018ec6ec',
  },
});

export const getAllMovies = () => {
  return instance.get('/');
};
