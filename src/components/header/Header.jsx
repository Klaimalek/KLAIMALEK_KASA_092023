import React from 'react';
import NavBar from '../navBar/NavBar';
import Banner from '../banner/Banner';
import banner from '../../assets/banner.png';
function Header() {
  return (
    <div className="header-kasa">
      <NavBar />
      <Banner
        messageHome="Chez vous, partout et ailleurs"
        pictureHome={banner}
      />
    </div>
  );
}

export default Header;
