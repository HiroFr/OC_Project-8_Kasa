// eslint-disable-next-line react/prop-types
function Profile({ hostname, hostpicture }) {
  return ( 
    <>
      <div className="profileContent">
        <h3 className="profileContent__name">{hostname}</h3>
        <img className="profileContent__picture" src={hostpicture} alt={hostname} />
      </div>
    </>
   );
}

export default Profile;