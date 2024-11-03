/* eslint-disable react/prop-types */
function Card({ data }) {
  return ( 
    <div className="cardBox">
      <img className="cardBox__picture" src={data.cover} alt={data.title} />
      <h2 className="cardBox__title">{data.title}</h2>
    </div>
   );
}

export default Card;