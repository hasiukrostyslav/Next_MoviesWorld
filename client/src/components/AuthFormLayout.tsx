import { Link } from 'react-router-dom';
import Logo from './Logo';

interface AuthFormLayoutProps {
  children: React.ReactNode;
  formType: 'signIn' | 'signUp';
}

function AuthFormLayout({ children, formType }: AuthFormLayoutProps) {
  return (
    <section className="flex w-2/3 flex-col text-slate-500 dark:text-slate-300">
      <Logo size="lg" className="self-center" />
      <div className="mb-2 mt-4">
        <h2 className="mb-1 text-2xl font-semibold text-slate-600 dark:text-slate-100">
          {formType === 'signIn' ? 'Sign in' : 'Sign up'}
        </h2>
        <p className="text-xs dark:text-slate-50">
          {formType === 'signIn'
            ? "Don't have an account?"
            : 'Already have an account?'}

          <Link
            to={formType === 'signIn' ? '/auth/signup' : '/auth/login'}
            className="rounded-md px-1 py-1 font-bold text-blue-500 outline-0 ring-blue-500 transition-all duration-200 hover:underline focus-visible:ring-2"
          >
            {formType === 'signIn' ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </div>

      {children}
    </section>
  );
}

export default AuthFormLayout;
