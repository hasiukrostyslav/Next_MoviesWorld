import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <section className="">
      <div className="relative px-40 pt-10 3xl:px-72">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}

export default Layout;
