// eslint-disable-next-line react/prop-types
function Profile({ hostname, hostpicture }) {
  return ( 
    <>
      <div className="profileDivPicture">
        <h3>{hostname}</h3>
        <img src={hostpicture} alt={hostname} className="profilePicture"/>
      </div>
    </>
   );
}

export default Profile;