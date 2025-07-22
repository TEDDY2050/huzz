import Navbar from './navbar';
import Footer from './Footer';
import SplineBackground from './SplineBackground';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <SplineBackground />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;