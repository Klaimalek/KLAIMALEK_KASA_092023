import React from 'react';
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Data from '../../data/Data.json';
import vectorLeft from '../../assets/vectorLeft.png';
import vectorRight from '../../assets/vectorRight.png';
function Carousel(data) {
  let { picture, title } = data;
  const [current, setCurrent] = useState(0);
  const urlParams = useParams();
  const accommodationData = Data.filter((data) => data.id === urlParams.id); // pour afficher les données selon l'id
  const arrayPicturesLength = accommodationData.map(
    (picture) => picture.pictures.length
  );
  if (accommodationData === []) {
    return <Navigate to="*" />;
  }
  function nextPicture() {
    setCurrent(current === arrayPicturesLength - 1 ? 0 : current + 1);
  }
  function previousPicture() {
    setCurrent(current === 0 ? arrayPicturesLength - 1 : current - 1);
  }
  return (
<div>
{accommodationData &&
    accommodationData.map((location, index, id) => (
        <div className = "show" key={`${index}-${location.id}`}>

            <div className="slides">
                {location.pictures.map((picture, index) => (
                  
                <div className={index === current ? "slide active" : "slide"} key={index}>
                    {index === current && (
                        <img className="imageSlide"
                        src={picture}
                        alt={location.title}
                        key={`${index}-${id}`}
                        />
                    )}
                </div>
                ))}
            </div>

            <img className={arrayPicturesLength > 1 ? "arrow-left" : "hide"}
            src={vectorLeft}
            alt="left arrow"
            key={`${index}-${id}-arrow-left`}
            onClick={previousPicture}
            />

            <img className={arrayPicturesLength > 1 ? "arrow-right" : "hide"}
            src={vectorRight}
            alt="right arrow"
            key={`${index}-${id}-arrow-right`}
            onClick={nextPicture}
            />

            <div className="page">
            {current + 1}/{arrayPicturesLength}
            </div>
        </div>
    ))}

   </div> 
  );
}

export default Carousel;
