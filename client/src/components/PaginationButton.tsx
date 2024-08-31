import Icon from './Icon';

interface PaginationButtonProps {
  page?: number;
  disabled?: boolean;
  prev?: boolean;
  next?: boolean;
  active?: boolean;
  outline?: boolean;
  dark?: boolean;
  onClick: () => void;
  className?: string;
}

function PaginationButton({
  page,
  prev,
  next,
  active,
  disabled,
  onClick,
  outline,
  dark,
  className,
}: PaginationButtonProps) {
  const styles = {
    active:
      'bg-slate-150 hover:bg-slate-300 dark:border-slate-500 dark:bg-slate-500 dark:hover:border-slate-400 dark:hover:bg-slate-400 border-slate-400',
    disabled:
      'border-slate-300 dark:border-slate-700 text-slate-300 dark:text-slate-700 cursor-not-allowed',
    regular:
      'dark:border-slate-700 dark:bg-slate-700 hover:bg-slate-200 border-slate-400 hover:dark:border-slate-600 hover:dark:bg-slate-600',
    dark: 'border-slate-700 bg-slate-700 hover:border-slate-600 hover:bg-slate-600 text-slate-100',
    outline:
      'bg-transparent border-slate-400 text-slate-400 hover:border-slate-500 hover:text-slate-500',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex h-8 w-8 items-center justify-center rounded-md border  text-sm outline-0 ring-blue-400 transition-all duration-500 focus-visible:ring-4  ${disabled ? styles.disabled : active ? styles.active : outline ? styles.outline : dark ? styles.dark : styles.regular} ${className}`}
    >
      {prev ? <Icon name="previous" /> : next ? <Icon name="next" /> : page}
    </button>
  );
}

export default PaginationButton;
