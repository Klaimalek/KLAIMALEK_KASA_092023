import React from 'react';
import logoFooter from '../../assets/logoFooter.png';
import './footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
      <img src={logoFooter} alt="Logo de Kasa footer" />
      </div>
      <div className="footer_copyright">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
