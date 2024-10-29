import NavBar from '../NavBar';
import Footer from '../Footer';
import Collapse from '../Collapse';
import Tag from '../Tag';
import Carousel from '../Carousel';
import Profile from '../Profile';
import CardListJson from '../../data.json';
import { useParams } from 'react-router-dom';


function HousingLayout() {
  const { id } = useParams();
  const cardData = CardListJson.find(item => item.id === id);

  return ( 
    <>
      <NavBar />
      <Carousel />
      <div className="headerLayout">
        <div className="titleLocation">
          <h1>{cardData.title}</h1>
          <h2>{cardData.location}</h2>
        </div>
        <Profile hostname={cardData.host.name} hostpicture={cardData.host.picture}/>
      </div>
      <div className="tagsLayout">
        {cardData.tags.map((tagsTitle, index) => (
          <Tag key={index} tagsTitle={tagsTitle}/>
        ))}
      </div>
      <h1>{cardData.rating}</h1>
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