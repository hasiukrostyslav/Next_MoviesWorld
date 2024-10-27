import SearchForm from './SearchForm';
import ThemeButton from './ThemeButton';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';

function TopBar() {
  return (
    <div
      className="relative flex gap-5"
      id="top-bar"
    >
      <SearchForm />
      <ThemeButton />
      <AuthMenu />
      <UserMenu />
    </div>
  );
}

export default TopBar;
