import logoKasa from '../assets/logo_Kasa.png';
import {Link, useLocation} from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return ( 
    <>
      <div className='navBar'>
        <img src={logoKasa} alt="Logo" />
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