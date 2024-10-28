import NavBar from '../NavBar';
import Footer from '../Footer';
import Collapse from '../Collapse';
import Tag from '../Tag';
import CardListJson from '../../data.json';
import { useParams } from 'react-router-dom';


function HousingLayout() {
  const { id } = useParams();
  const cardData = CardListJson.find(item => item.id === id);

  return ( 
    <>
      <NavBar />
      <h1>{cardData.title}</h1>
      <h2>{cardData.location}</h2>
      <h2>{cardData.host.name}</h2>
      <img src={cardData.host.picture} alt={cardData.host.name} />
      <div className="tagsLayout">
        {cardData.tags.map((tagsTitle, index) => (
          <Tag key={index} tagsTitle={tagsTitle}/>
        ))}        
      </div>
      <div className="collapseContent">
        <Collapse title="Description" content={cardData.description}/>
        <Collapse title="Équipements" content={
          <ul>
            {cardData.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }/>
      </div>
      <Footer />
    </>
   );
}

export default HousingLayout;