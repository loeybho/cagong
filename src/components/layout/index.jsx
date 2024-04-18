import Navbar from '@components/layout/Navbar';
import { Outlet } from 'react-router-dom';
import Wrapper from '@components/Wrapper.jsx';
function Layout() {
  return (
    <div>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Navbar />
    </div>
  );
}

export default Layout;
