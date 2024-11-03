/* eslint-disable react/prop-types */
/* import IconChevronOpen from '../assets/icons/icon-chevron-open.png'; */
import IconChevronClose from '../assets/icons/icon-chevron-close.png';

function Collapse({ title, content }) {
  return ( 
    <>
    <div className="collapseContainer">
      <div className="collapseContainer__collapse">
        <h2 className="collapseContainer__collapse__title">{title}</h2>
        <img className="collapseContainer__collapse__picture" src={IconChevronClose} alt="iconChevron" />
      </div>
      <div className="collapseContainer__collapseContent">
        <span className="collapseContent__collapseContent__text">{content}</span>
      </div>
    </div>
    </>
   );
}

export default Collapse;