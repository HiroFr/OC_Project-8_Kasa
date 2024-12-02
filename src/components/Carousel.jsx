import { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataCarousel from '../data.json';
import arrowBack  from '../assets/icons/arrow_back.png';
import arrowNext  from '../assets/icons/arrow_forward.png';
function Carousel() {

  const {id} = useParams();

  const data = dataCarousel.find(item => item.id === id);

  const [index, setIndex] = useState(0); // Initialise l'index à 0

  var length = data.pictures.length;
  const handlePrevious = () => {
    const newIndex = index - 1; // Diminue l'index de l'image actuel
    setIndex(newIndex < 0 ? length - 1 : newIndex); // Revient à la dernière image si on dépasse le début
  }

  const handleNext = () => {
    const newIndex = index + 1; // Auguemente l'index de l'image actuel
    setIndex(newIndex >= length ? 0 : newIndex); // Revient à la première image si on dépasse la dernière
  };

  return ( 
    <>
      <div className="carousel">
        {length > 1 && (
          <>
            <img src={arrowBack} onClick={handlePrevious} className="carousel__arrowBack"/>
            <img src={arrowNext} onClick={handleNext} className="carousel__arrowNext"/>
          </>
        )}
        <img src={data.pictures[index]} alt="pictures" className="carousel__picture"/>
        {length > 1 && (
          <p className="carousel__nbr">{index + 1}/{length}</p>
        )}
      </div>
    </>
   );
}

export default Carousel;