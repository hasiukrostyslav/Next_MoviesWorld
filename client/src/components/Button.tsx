interface ButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'outline' | 'transparent' | 'outlineWhite';
  className?: string;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

const buttonColors = {
  primary:
    'border-blue-600 bg-blue-600 text-slate-100 hover:border-blue-700 hover:bg-blue-700 ring-blue-300 border-2',
  secondary: '',
  outline:
    'dark:border-slate-300 border-blue-600 dark:hover:border-slate-100  hover:border-blue-400 text-blue-600 dark:text-slate-300 dark:hover:text-slate-100 hover:text-blue-400 ring-blue-500 dark:focus:border-blue-500 focus:border-blue-500 border-2',
  outlineWhite:
    'border-slate-300 hover:border-slate-100 text-slate-300 hover:text-slate-100 focus:border-blue-500',
  transparent:
    'border-0 text-blue-500 font-semibold hover:bg-blue-100 dark:hover:bg-slate-800',
};

const buttonSize = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-5 py-3 text-sm',
  large: 'px-6 py-3 text-base',
};

function Button({
  children,
  color,
  size,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg border-2 font-semibold outline-0 transition-all duration-500 focus-visible:ring-4 ${buttonColors[color]} ${buttonSize[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
