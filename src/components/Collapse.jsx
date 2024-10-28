/* eslint-disable react/prop-types */
/* import IconChevronOpen from '../assets/icons/icon-chevron-open.png'; */
import IconChevronClose from '../assets/icons/icon-chevron-close.png';

function Collapse({ title, content }) {
  return ( 
    <>
    <div className="collapseContainer">
      <div className="collapse">
        <h2>{title}</h2>
        <img src={IconChevronClose} alt="iconChevron" />
      </div>
      <div className="collapseContain">
        <span>{content}</span>
      </div>
    </div>
    </>
   );
}

export default Collapse;