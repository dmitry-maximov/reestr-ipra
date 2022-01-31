import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/">Главная</Link>
        <Link to="/reestr">Реестр</Link>
      </div>
    </div>
  );
}

export default NavBar;
