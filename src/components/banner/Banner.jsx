import React from 'react'
import './banner.css';

function Banner({pictureHome ,messageHome}) {
  return (
    <div className='banner'>
    <img className='img-banner' src={`${pictureHome}`} alt="Baniere Kasa"/>
    <h1 className='text-banner'>{`${messageHome}`} </h1>
    </div>
  )
}
export default Banner

