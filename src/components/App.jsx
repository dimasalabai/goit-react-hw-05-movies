import { Routes, Route } from 'react-router-dom';
import MovieList from './MovieList/MovieList';

// import MainMenu from './MainMenu/MainManu';

// import HomePage from 'pages/HomePage/HomePage';
// import PostsSearchPage from 'pages/PostsSsearchPage/PostsSsearchPage';
// import Contacts from 'pages/ContactsPage/ContactsPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import SinglePostPage from 'pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <div className="app">
      <MovieList />;
      {/* <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts-search" element={<PostsSearchPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </div>
  );
};
