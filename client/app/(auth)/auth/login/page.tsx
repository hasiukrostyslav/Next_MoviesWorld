import { Metadata } from 'next';
import Link from 'next/link';
import AuthFormLayout from '@/app/_components/AuthFormLayout';
import Button from '@/app/_components/Button';
import Input from '@/app/_components/Input';

export const metadata: Metadata = {
  title: 'Sign In',
};

function LoginPage() {
  return (
    <AuthFormLayout formType="signIn">
      <form
        className="flex w-full flex-col"
        autoComplete="off"
      >
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

        <Button
          size="small"
          color="primary"
          className="mt-6"
        >
          Sign in
        </Button>
      </form>
      <Link
        href="/"
        className="mt-6 self-end rounded-md px-1 py-1 text-xs font-semibold text-blue-500 outline-0 ring-blue-500 transition-all duration-200 hover:underline focus-visible:ring-2"
      >
        Forgot your password?
      </Link>
    </AuthFormLayout>
  );
}

export default LoginPage;
