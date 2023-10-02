import React from 'react';
import Tag from '../tags/Tag';
import './description.css'
import Host from '../host/Host';
function Description({ tags, location, title, host }) {
  return (
    <div className="description-apartment">
      <div className='aprtment-information'>
          <h1 className="title-aprtment">{title}</h1>
          <p className="location-apartment">{location}</p>
          <Tag tags={tags} />
      </div>
      <div className='host-content'>
       <Host host={host}/> 
      </div>
    </div>
  );
}

export default Description;