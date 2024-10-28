/* eslint-disable react/prop-types */
function Card({ data }) {
  return ( 
    <div className="cardBox">
      <img src={data.cover} alt={data.title} />
      <h2>{data.title}</h2>
    </div>
   );
}

export default Card;