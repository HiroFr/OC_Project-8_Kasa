import BackgroundOverlay from '../assets/pictures/BackgroundOverlay.png';

// eslint-disable-next-line react/prop-types
function Banner({ title, picture }) {
  return ( 
    <>
      <div className="bannerDivPicture">
        <h1>{title}</h1>
        <img src={picture} alt="image_source" className='bannerPicture' />
        <img src={BackgroundOverlay} alt="Superposition" className='bannerOverlayPicture' />
      </div>
    </>
   );
}

export default Banner;