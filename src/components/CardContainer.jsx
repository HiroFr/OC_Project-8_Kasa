import Card from './Card';
import CardListJson from '../data.json';
import { Link } from 'react-router-dom';

function CardContainer() {
  return ( 
    <>
      <div className="cardContainer">
      {CardListJson.map((cardData, index) => (
        <Link  to={`/housing/${cardData.id}`} key={index}>
          <Card data={cardData}/>
        </Link>
      ))}
      </div>
    </>
   );
}

export default CardContainer;