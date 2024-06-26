import {useNavigate, Outlet} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="nav">
        <h1>Captain's Log</h1>
        <button onClick={() => navigate('/create')}>New Log</button>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
