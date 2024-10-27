import NavBar from '../NavBar';
import Banner from '../Banner';
import CardContainer from '../CardContainer';
import Footer from '../Footer';

import imageSource1 from '../../assets/pictures/ImageSource1.png';
/* import BackgroundOverlay from '../assets/pictures/BackgroundOverlay.png'; */

function Home() {
  return (
    <>
      <div className='homeContainer'>
        <NavBar />
        <Banner title="Chez vous, partout et ailleurs" picture={imageSource1}/>
        <CardContainer />
      </div>
      <Footer />
    </>
   );
}

export default Home;