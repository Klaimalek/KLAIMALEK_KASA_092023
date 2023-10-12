import React from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import './card.css';
function Card({ data }) {
  const { id, cover, title } = data;
  return (
    <article className="card">
      <Link to={`accommodation/${id}`} className="card-link">
        <div className="card__overly " >    </div>
          
            <img className="img-card" src={cover} alt={title} />
            <h2 className='card-title'>{title || <Skeleton count={1} />}</h2>
          
      
      </Link>
    </article>
  );
}

export default Card;
