import ButtonLink from './ButtonLink';

function AuthMenu() {
  return (
    <div className="flex gap-5">
      <ButtonLink size="small" color="outline" path="auth/login">
        Log in
      </ButtonLink>
      <ButtonLink size="small" color="primary" path="auth/signup">
        Sign up
      </ButtonLink>
    </div>
  );
}

export default AuthMenu;
