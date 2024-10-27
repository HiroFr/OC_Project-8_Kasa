// eslint-disable-next-line react/prop-types
function Banner({ title, picture }) {
  return ( 
    <>
      <div className="bannerDivPicture">
        <h1>{title}</h1>
        <img src={picture} alt="image_source" className='bannerPicture' />
      </div>
      {/*<div className="bannerDivOverlay">
        <img src={pictureOverlay} alt="Superposition" className='bannerOverlayPicture' />
      </div> */}
    </>
   );
}

export default Banner;