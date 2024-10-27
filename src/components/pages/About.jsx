import NavBar from '../NavBar';
import Banner from '../Banner';
import Footer from '../Footer';

import imageSource2 from '../../assets/pictures/ImageSource2.png';

function About() {
  return ( 
    <>
      <NavBar />
      <Banner picture={imageSource2}/>
      <Footer />
  </>
   );
}

export default About;