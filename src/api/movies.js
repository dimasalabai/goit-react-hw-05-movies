import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: '68860e7024beff1d4722639f018ec6ec',
  },
});

export const getAllMovies = () => {
  return instance.get('/3/trending/movie/day');
};

export const getCurrentMovie = id => {
  return instance.get(`/3/movie/${id}`);
};

export const getSearchMovie = search => {
  return instance.get(`/3/search/movie`, {
    params: {
      query: search,
      page: 1,
    },
  });
};

export const getCats = id => {
  return instance.get(`/3/movie/${id}/credits`);
};

export const getReviews = id => {
  return instance.get(`/3/movie/${id}/reviews`);
};
