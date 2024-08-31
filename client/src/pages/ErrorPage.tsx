import Error from '../components/Error';

interface ErrorPageProps {
  code: number;
  message: string;
}

function ErrorPage({ code, message }: ErrorPageProps) {
  return <Error code={code} pageType="inner" message={message} />;
}

export default ErrorPage;
