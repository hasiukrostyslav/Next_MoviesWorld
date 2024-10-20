import SearchForm from './SearchForm';
import ThemeButton from './ThemeButton';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';
import SearchBoard from './SearchBoard';

function TopBar() {
  return (
    <div
      className="relative flex gap-5"
      id="top-bar"
    >
      <SearchForm />
      <SearchBoard />
      <ThemeButton />
      <AuthMenu />
      <UserMenu />
    </div>
  );
}

export default TopBar;
