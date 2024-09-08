'use client';

import { useRouter } from 'next/navigation';
import Button from '../_components/Button';
import Error from '../_components/Error';

function NotFound() {
  const router = useRouter();
  return (
    <Error
      message="This page could not be found."
      code={404}
      pageType="inner"
    >
      <Button
        size="small"
        color="transparent"
        onClick={() => router.back()}
      >
        Go Back
      </Button>
    </Error>
  );
}

export default NotFound;
