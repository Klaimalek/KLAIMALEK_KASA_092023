import React from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import './card.css';
function Card({ data }) {
  const { id, cover, title } = data;
  return (
    <article className="card">
      <Link to={`accommodation/${id}`} className="card-link">
        <img className="img-card" src={cover} alt={title} />
        <div className="card-title">
          <h2>{title || <Skeleton count={1} />}</h2>
        </div>
      </Link>
    </article>
  );
}

export default Card;
