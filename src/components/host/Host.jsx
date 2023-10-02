import React from 'react';
import './host.css';
function Host({ host }) {
  return (
    <div className="host">
      <div className="picture-host">
        <img src={host.picture} alt={host.name} className="img" />
      </div>
      <div className=' name-host'>
       {host.name}
      </div>
    </div>
  );
}

export default Host;
