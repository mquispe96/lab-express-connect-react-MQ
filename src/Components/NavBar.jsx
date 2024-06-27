import {useNavigate, Outlet} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="nav">
        <h1 onClick={() => navigate('/logs')}>Captain's Log</h1>
        <button onClick={() => navigate('/logs/new')}>New Log</button>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
