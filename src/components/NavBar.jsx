import logoKasa from '../assets/logo_Kasa.png';
import {Link, useLocation} from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <>
      <div className='navBar'>
        <Link to="/">
          <img src={logoKasa} alt="Logo" />
        </Link>
        <ul className='listNavBar'>
          <li className={location.pathname === '/' ? "selectedLink" : ''}>
            <Link to="/">Acceuil</Link>
          </li>
          <li className={location.pathname === '/about' ? "selectedLink" : ''}>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;