'use client';

import { AuthError, ServerError } from '../_error/error';
import Error from '../_components/Error';
import Button from '../_components/Button';

function ErrorPage({
  error,
  reset,
}: {
  error: ServerError | AuthError | (Error & { digest?: string });
  reset: () => void;
}) {
  const statusCode =
    error instanceof ServerError || error instanceof AuthError
      ? error.statusCode
      : 500;

  return (
    <Error
      code={statusCode}
      pageType="inner"
      message={error.message}
    >
      <Button
        size="small"
        color="transparent"
        onClick={reset}
      >
        Try again!
      </Button>
    </Error>
  );
}

export default ErrorPage;
