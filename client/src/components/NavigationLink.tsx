import { NavLink } from 'react-router-dom';
import { useMatchTheme } from '../hooks/useMatchTheme';

interface NavigationLinkProps {
  path: string;
  children: React.ReactNode;
  className?: string;
}

const baseStyles =
  'duration-500 rounded-md outline-0 transition-all ring-blue-500 outline-0 focus-visible:ring-4 px-2 py-1 z-10';

function NavigationLink({ path, children, className }: NavigationLinkProps) {
  const match = useMatchTheme();

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${baseStyles} ${className} ${match ? 'text-blue-500 hover:text-blue-400' : 'text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400'}`
          : `${baseStyles} ${className} ${match ? 'text-slate-200 hover:text-slate-50' : 'hover:text-slate-500 dark:hover:text-slate-50'}`
      }
      to={path}
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
