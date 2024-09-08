import ButtonLink from '../_components/ButtonLink';
import Error from '../_components/Error';

function NotFound() {
  return (
    <Error
      message="This page could not be found."
      code={404}
      pageType="outer"
    >
      <ButtonLink
        size="small"
        href="/"
        color="transparent"
      >
        Back to Home
      </ButtonLink>
    </Error>
  );
}

export default NotFound;
