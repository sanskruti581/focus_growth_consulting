import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`site-shell ${isHomePage ? 'site-shell-home' : ''}`}>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
