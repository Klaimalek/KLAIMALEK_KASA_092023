import React from 'react';

import Navbar from '../../components/navBar/NavBar';
import Banner from '../../components/banner/Banner';
import bannerApropos from '../../assets/bannerApropos.png';
const About = () => {
  return (
    <div className="container-about">
      <div className="navbar-page-about">
        <Navbar />
        <Banner pictureHome={bannerApropos} messageHome="" />
      </div>
    </div>
  );
};

export default About;
