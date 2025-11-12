import Topbar from '../../ui/Topbar';
import Navbar from './Navbar';

function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-full overflow-y-auto">
      <Topbar />
      <Navbar />
    </div>
  );
}

export default Header;
