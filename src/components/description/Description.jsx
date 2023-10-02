import React from 'react';
import Tag from '../tags/Tag';
import './description.css';
import Host from '../host/Host';
import Rate from '../rating/Rate';
import Collapse from '../collapses/Collapse';
function Description({
  tags,
  location,
  title,
  host,
  rate,
  description,
  equipments,
}) {
  return (
    <div className="description-apartment">
      <div className="aprtment-information">
        <div class="informations">
          <h1 className="title-aprtment">{title}</h1>
          <p className="location-apartment">{location}</p>
          <Tag tags={tags} />
        </div>
        <div class="host-content">
          <Host host={host} />
          <Rate rate={rate} />
        </div>
      </div>

      <div className="collapse-content">
        <Collapse title={'Description'} content={description} />
        <Collapse title={'Équipements'} content={equipments} />
      </div>
    </div>
  );
}

export default Description;
