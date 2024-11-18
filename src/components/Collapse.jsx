/* eslint-disable react/prop-types */
import { useState } from 'react';
import IconChevronOpen from '../assets/icons/icon-chevron-open.png';
import IconChevronClose from '../assets/icons/icon-chevron-close.png';

function Collapse({ title, content }) {

  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prevState) => !prevState);
  }

  return ( 
    <>
    <div className="collapseContainer">
      <div className="collapseContainer__collapse" onClick={toggleCollapse}>
        <h2 className="collapseContainer__collapse__title">{title}</h2>
        <img className="collapseContainer__collapse__picture " src={collapse ? IconChevronOpen : IconChevronClose} alt="iconChevron" />
      </div>
      {collapse && (
        <div className="collapseContainer__collapseContent">
          <span className="collapseContent__collapseContent__text">{content}</span>
        </div>
      )}
    </div>
    </>
   );
}

export default Collapse;