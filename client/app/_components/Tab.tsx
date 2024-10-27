import Link from 'next/link';

interface TabProps {
  children: React.ReactNode;
  href: string;
  tabType: string;
  searchParamType: string | null;
}
const baseStyles =
  'duration-500 rounded-md outline-0 transition-all ring-blue-500 outline-0 focus-visible:ring-4 px-2 py-1 text-xl font-semibold basis-1/4 text-center';

function Tab({ children, href, tabType, searchParamType }: TabProps) {
  return (
    <Link
      className={`${baseStyles} ${
        tabType === searchParamType
          ? 'text-blue-600  hover:text-blue-400'
          : 'text-slate-400 hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400'
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
export default Tab;
