import ButtonLink from '../components/ButtonLink';
import Error from '../components/Error';

function NotFound() {
  return (
    <Error message="This page could not be found." code={404} pageType="outer">
      <ButtonLink size="small" path="/" color="transparent">
        Back to Home
      </ButtonLink>
    </Error>
  );
}

export default NotFound;
