import React from 'react'
import './banner.css';
import banner from '../../assets/banner.png';
function Banner() {
  return (
    <div className='banner'>
    <img className='img-banner' src={banner} alt="Baniere Kasa"/>
    <h1 className='text-banner'> Chez vous, partout et ailleurs</h1>
    </div>
  )
}
export default Banner

