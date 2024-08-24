import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error: unknown = useRouteError();
  console.error(error);

  function hasStatusText(error: unknown): error is { statusText: string } {
    return typeof error === 'object' && error !== null && 'statusText' in error;
  }

  function hasMessage(error: unknown): error is { message: string } {
    return typeof error === 'object' && error !== null && 'message' in error;
  }

  const errorMessage: string = hasStatusText(error)
    ? error.statusText
    : hasMessage(error)
      ? error.message
      : 'Unknown error, please check the console log';

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Error</h2>
          <p className="my-4">{errorMessage}</p>
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
