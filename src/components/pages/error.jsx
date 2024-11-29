import { useRouteError } from 'react-router-dom';

const ErrorDisplayer = () => {
    const error = useRouteError();
    return (
      <div>
        <h1>Oops! Something went wrong.</h1>
        <p>{error.message || 'Unknown error occurred'}</p>
      </div>
    );
}

export default ErrorDisplayer;