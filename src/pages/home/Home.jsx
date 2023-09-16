import React from 'react'
import Header from '../../components/header/Header'
import ApartmentGrid from '../../components/apartments/ApartmentGrid.jsx'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <ApartmentGrid/>
    </div>
  )
}

export default Home
