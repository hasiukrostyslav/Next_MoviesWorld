import AuthFormLayout from '../components/AuthFormLayout';
import Input from '../components/Input';
import Button from '../components/Button';

function SignUpPage() {
  return (
    <AuthFormLayout formType="signUp">
      <form className="flex w-full flex-col" autoComplete="off">
        <Input labelText="Name" inputName="name" type="text" errorMessage="" />
        <Input
          labelText="Email Address"
          inputName="email"
          type="email"
          errorMessage=""
        />
        <Input
          labelText="Password"
          inputName="password"
          type="password"
          errorMessage=""
        />
        <Input
          labelText="Confirm Password"
          inputName="confirmPassword"
          type="password"
          errorMessage=""
        />
        <Button size="small" color="primary" className="mt-6">
          Sign up
        </Button>
      </form>
    </AuthFormLayout>
  );
}

export default SignUpPage;
