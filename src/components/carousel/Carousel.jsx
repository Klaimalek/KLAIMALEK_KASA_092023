import React from 'react';
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Data from '../../data/Data.json';
import vectorLeft from '../../assets/vectorLeft.png';
import vectorRight from '../../assets/vectorRight.png';
import './carousel.css';

function Carousel(data) {
  const [current, setCurrent] = useState(0);
  const urlParams = useParams();
  const logmentData = Data.filter((data) => data.id === urlParams.id); // pour afficher les données selon l'id
  const pictures = logmentData[0].pictures;
 
  const title = logmentData[0].title;

  /**   // pour récupérer la longeur du tableau des images pour chaque logement */
  
  const arrayPicturesLenght = logmentData.map(
    (images) => images.pictures.length
  );

  const actualPicture = pictures[current];


  /** afficher la page d'erreur */
  if (logmentData === []) {
    return <Navigate to="*" />;
  }
  /**
 la fonction qui gère l'emplacement des images vers le droit
 */
  function nextPicture() {
    setCurrent(current === arrayPicturesLenght - 1 ? 0 : current + 1);
  }
  /**
 la fonction qui gère l'emplacement des images vers la gauche
 */
  function previousPicture() {
    setCurrent(current === 0 ? arrayPicturesLenght - 1 : current - 1);
  }



  return (
    <div className="carousel">
      <img src={ actualPicture} alt={title} className='pictures-carousel' />
      <div className="slides">
      <img
          onClick={nextPicture}
          className="arrow arrow-right"
          src={vectorRight}
          alt="arrow right"
        />
        <p className="counter">
        {current + 1}/{arrayPicturesLenght}
      </p>
      <img
          onClick={previousPicture}
          className="arrow arrow-left"
          src={vectorLeft}
          alt="arrow left"
        />
      </div>
    </div>
  );
 
}

export default Carousel;
