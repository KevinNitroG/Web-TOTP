import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div id="error-page" className="card w-96 shadow-2xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Error</h2>
          <p>{error.statusText || error.message} </p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to="/">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
