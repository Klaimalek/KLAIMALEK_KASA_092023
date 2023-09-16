import React from 'react';
import './apatmentGrid.css';
import Card from '../cardApartment/Card';
import Data from '../../data/Data.json';
function ApartmentGrid({ data }) {
  return (
    <div className="cards">
      {Data.map((single) => (
        <Card key={single.id} data={single} />
      ))}
    </div>
  );
}

export default ApartmentGrid;
