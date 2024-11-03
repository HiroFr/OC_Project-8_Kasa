import NavBar from '../NavBar';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
    <NavBar />
    <div className="notFoundContainer">
      <h1 className="notFoundContainer__title">404</h1>
      <h3 className="notFoundContainer__subtitle">Oups! La page que vous demandez n&apos;existe pas.</h3>
      <h5 className="notFoundContainer__backToHome">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </h5>
    </div>
    <Footer />
    </>
   );
}

export default NotFound;