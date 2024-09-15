import { Metadata } from 'next';
import AuthFormLayout from '@/app/_components/AuthFormLayout';
import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';

export const metadata: Metadata = {
  title: 'Sign Up',
};

function SignUpPage() {
  return (
    <AuthFormLayout formType="signUp">
      <form
        className="flex w-full flex-col"
        autoComplete="off"
      >
        <Input
          labelText="Name"
          inputName="name"
          type="text"
          errorMessage=""
        />
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
        <Button
          size="small"
          color="primary"
          className="mt-6"
        >
          Sign up
        </Button>
      </form>
    </AuthFormLayout>
  );
}

export default SignUpPage;
