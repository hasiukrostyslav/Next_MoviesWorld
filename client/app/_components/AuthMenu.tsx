import ButtonLink from './ButtonLink';

function AuthMenu() {
  return (
    <div className="z-20 flex gap-5">
      <ButtonLink
        size="small"
        color="outline"
        href="auth/login"
      >
        Log in
      </ButtonLink>
      <ButtonLink
        size="small"
        color="primary"
        href="auth/signup"
      >
        Sign up
      </ButtonLink>
    </div>
  );
}

export default AuthMenu;
