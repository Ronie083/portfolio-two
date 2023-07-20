import React, { useState } from 'react';
import { BsFillArrowDownRightCircleFill, BsFillArrowUpLeftCircleFill } from "react-icons/bs";
import './ProjectsCard.css';

const ProjectsCards = ({ image, title, features, technologies, live, code }) => {
  const [isActive, setIsActive] = useState(false);

  const handleArrClick = () => {
    setIsActive(true);
  };

  const handleClcClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`main center mb-5 ${isActive ? 'active' : ''}`}>
      <div className={`box center ${isActive ? 'active' : ''}`} style={{ backgroundImage: `url(${image})` }}>
        <div className="arr_container center" onClick={handleArrClick}>
          <BsFillArrowDownRightCircleFill />
        </div>
        <div className={`left_container ${isActive ? 'active' : 'off'}`}>
          <div className="center-skills">
            <p className='text-xl font-bold'>{title}</p>
            <div className='text-left'>
              <ul className="features my-5">
                <strong>Features:</strong>
                {features.map((feature, index) => (
                  <li className='mb-2' key={index}>{index + 1}.{feature}</li>
                ))}
              </ul>
              <strong>Technologies: </strong>
              <p>{technologies}</p>
            </div>
            <strong>Details</strong>
            <div className="ctrlBtn my-3">
              <a href={live} className='btn btn-outline border-0 border-b-4 border-l-4 border-red-600 mr-3 bg-white'>Live Site</a>
              <a href={code} className='btn btn-outline border-0 border-b-4 border-l-4 border-red-600 bg-white'>Code Link</a>
            </div>
          </div>
          <div className="cancel center" onClick={handleClcClick}>
            <BsFillArrowUpLeftCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
