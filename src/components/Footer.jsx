import logoKasa from '../assets/Logo_KasaFooter.png';

function Footer() {
  return ( 
    <div className="footer">
      <img className="footer__logo" src={logoKasa} alt="LogoKasa" />
      <h3 className='footer__title'>© 2020 Kasa. All rights reserved</h3>
    </div>
   );
}

export default Footer;