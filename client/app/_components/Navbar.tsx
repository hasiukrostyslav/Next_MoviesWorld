import Logo from './Logo';
import NavbarBackground from './NavbarBackground';
import NavigationLink from './NavigationLink';
import TopBar from './TopBar';

function Navbar() {
  return (
    <nav className="sticky top-10 z-50 mb-4 flex items-center justify-between">
      <div className="flex items-center justify-between gap-7 3xl:gap-10">
        <Logo size="base" />
        <ul className="flex items-center gap-3 3xl:gap-6">
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/movies">Movies</NavigationLink>
          <NavigationLink href="/cartoons">Kids</NavigationLink>
          <NavigationLink href="/tv">TV</NavigationLink>
          <NavigationLink href="/collections">Collections</NavigationLink>
          <NavigationLink href="/actors">Actors</NavigationLink>
        </ul>
      </div>
      <TopBar />
      <NavbarBackground />
    </nav>
  );
}

export default Navbar;
