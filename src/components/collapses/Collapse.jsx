import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import './collapse.css';

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState('none');

  const toggleState = () => {
    if (toggle === 'none') {
      setToggle('block');
    } else {
      setToggle('none');
    }
  };

  return (
    <div className="container-collaspe">
      <div className="collapse-content-header">
        <p className="collapse-title">{`${title}`} </p>

        <div onClick={toggleState} className="collapse-arrow">
          {toggle === 'none' ? (
            <img
              src={arrow}
              style={{ transform: 'rotate(180deg)' }}
              alt="Arrow down"
            />
          ) : (
            <img src={arrow} alt="Arrow up" />
          )}
        </div>
      </div>

      <div className="collapse-content " style={{ display: toggle }}>
        {typeof content === 'object' ? intoList(content) : <p> {content} </p>}{' '}
      </div>
    </div>
  );
}

function intoList(equip) {
  return (
    <ul className='list-equipment'>
      {equip.map((equipment) => (
        <li key={equipment}>{equipment}</li>
      ))}
    </ul>
  );
}
export default Collapse;
