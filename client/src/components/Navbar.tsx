import Logo from './Logo';
import NavigationLink from './NavigationLink';
import TopBar from './TopBar';

function Navbar() {
  return (
    <nav className="relative z-30 mb-4 flex items-center justify-between">
      <div className="flex items-center justify-between gap-7 3xl:gap-10">
        <Logo size="base" />
        <ul className="flex items-center gap-3 3xl:gap-6">
          <NavigationLink path="/">Home</NavigationLink>
          <NavigationLink path="/movies">Movies</NavigationLink>
          <NavigationLink path="/cartoons">Kids</NavigationLink>
          <NavigationLink path="/tv">TV</NavigationLink>
          <NavigationLink path="/collections">Collections</NavigationLink>
          <NavigationLink path="/actors">Actors</NavigationLink>
        </ul>
      </div>
      <TopBar />
    </nav>
  );
}

export default Navbar;
