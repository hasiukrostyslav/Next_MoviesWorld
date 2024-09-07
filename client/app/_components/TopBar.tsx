import SearchForm from './SearchForm';
import ThemeButton from './ThemeButton';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';

function TopBar() {
  return (
    <div className="flex gap-5">
      <SearchForm />
      <ThemeButton />
      <AuthMenu />
      <UserMenu />
    </div>
  );
}

export default TopBar;

