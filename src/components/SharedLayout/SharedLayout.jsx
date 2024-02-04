import { Outlet } from 'react-router-dom';

import MovieMenu from 'components/MovieMenu/MovieMenu';

const SharedLayout = () => {
  return (
    <>
      <MovieMenu />
      <Outlet />
    </>
  );
};
export default SharedLayout;
