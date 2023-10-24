import React from 'react';
import'./error.css';
import { Link } from "react-router-dom";
import Navbar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
function Error() {
  return (
    <div >
    <div className='nabvar-page-error'><Navbar/></div>
        <div className="page-erreur">
         
          <div className="number-404-message">
            <h1 className="number-404">404</h1>
            <div className="message-erreur">
            <p className="message-error-1">Oups! La page que&nbsp;</p>
            <p className="message-error-2">vous demandez n'existe pas.</p>
            </div>
          </div>
          <Link to ="/" className="lien">
              <div className="text"> Retourner sur la page d’accueil</div>
          </Link>
        </div>
       <Footer/> 
    </div>
  );
}

export default Error;
