import { useAppDispatch, useAppSelector, toggleTheme } from '../store';
import { useMatchTheme } from '../hooks/useMatchTheme';
import Icon from './Icon';

interface ThemeButtonProps {
  absolute?: boolean;
}

const absoluteStyles = 'absolute right-1 top-1';

function ThemeButton({ absolute }: ThemeButtonProps) {
  const match = useMatchTheme();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <button
      className={`rounded-lg p-2 text-xl outline-0 ring-blue-500 focus-visible:ring-4 ${absolute ? absoluteStyles : ''} ${match ? 'text-slate-200' : ''}`}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === 'light' ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  );
}

export default ThemeButton;
