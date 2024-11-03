import BackgroundOverlay from '../assets/pictures/BackgroundOverlay.png';

// eslint-disable-next-line react/prop-types
function Banner({ title, picture }) {
  return ( 
    <>
      <div className="bannerContent">
        <h1 className='bannerContent__title'>{title}</h1>
        <img src={picture} alt="image_source" className='bannerContent__picture' />
        <img src={BackgroundOverlay} alt="Superposition" className='bannerContent__overlayPicture' />
      </div>
    </>
   );
}

export default Banner;