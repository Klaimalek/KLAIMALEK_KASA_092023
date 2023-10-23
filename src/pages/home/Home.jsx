import React from 'react';
import Header from '../../components/header/Header';
import ApartmentGrid from '../../components/apartments/ApartmentGrid.jsx';
import Footer from '../../components/footer/Footer';
import './home.css';
function Home() {
  return (
    <div className="home">
      <Header />
      <ApartmentGrid />
      
        <Footer/>
      </div>
    
  );
}

export default Home;
