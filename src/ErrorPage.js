import React from 'react';
import { useRouteError } from 'react-router';

import NotFound from './NotFound';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.status === 404) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
