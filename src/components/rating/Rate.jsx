import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Data from '../../data/Data.json';
import starGrey from '../../assets/starGrey.png';
import starRed from '../../assets/starRed.png';
import'./rate.css'
function Rate() {
  const idLogment = useParams('id').id;

  const logementSingle = Data.filter((detail) => detail.id === idLogment);

  if (logementSingle === []) {
    return <Navigate to="*" />;
  }
 
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
    
      {logementSingle.map((star, index) =>
     
        stars.map((stars) =>
       
          stars.rating <= - 1 ? (
            <img
              src={starGrey}
              alt="grey-star"
              key={`${index}-${stars}`}
              className="star"
            />
          ) : (
            <img
              src={starRed}
              alt="red-star"
              key={`${index}-${stars}`}
              className="star"
            />
          )
        )
      )}
    </div>
  );
}

export default Rate;
