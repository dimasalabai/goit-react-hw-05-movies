import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MovieMenu from 'components/MovieMenu/MovieMenu';

import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <MovieMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
