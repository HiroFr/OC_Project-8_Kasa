import { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataCarousel from '../data.json';
import arrowBack  from '../assets/icons/arrow_back.png';
import arrowNext  from '../assets/icons/arrow_forward.png';
function Carousel() {

  const {id} = useParams();

  const data = dataCarousel.find(item => item.id === id);

  const [index, setIndex] = useState(0);

  var length = data.pictures.length;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  }

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return ( 
    <>
      <div className="carousel">
        {length > 1 && (
          <>
            <img src={arrowBack} onClick={handlePrevious} className="arrowBack"/>
            <img src={arrowNext} onClick={handleNext} className="arrowNext"/>
          </>
        )}
        <img src={data.pictures[index]} alt="pictures" className="carouselPicture"/>
        <p className="carouselNbr">{index + 1}/{length}</p>
      </div>
    </>
   );
}

export default Carousel;