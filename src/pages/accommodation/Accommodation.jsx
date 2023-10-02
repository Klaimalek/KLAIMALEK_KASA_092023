import React from 'react';
import Navbar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import Collapse from '../../components/collapses/Collapse';
import Data from '../../data/Data.json';
import { Navigate, useParams } from 'react-router-dom';
import Tag from '../../components/tags/Tag';
import './accommodation.css';

function Accommodation() {
  /**Récupération de l'id de l'accommodation depuis les paramètres de l'url grace au useParams */

  const idAccommodation = useParams('id').id;

  /** on parcourt les data en comparant l'id récupérer de url avec id qui se trouve dans les dats
   * si les deux id sont identique  on retourne les informations qui correspondant à l'id
   */

  const acommodationDetailSingle = Data.filter(
    (detail) => detail.id === idAccommodation
  );

  /**récupération les données necessaire pour afficher la page d'apartement */
  const description = acommodationDetailSingle[0].description;
  const equipments = acommodationDetailSingle[0].equipments;
  const tags= acommodationDetailSingle[0].tags;
  /** vérification si le tableau accomoodationDetailSingle est vide donc on redirige l"utilisateur vers la page notFond */
  if (acommodationDetailSingle.length === 0) {
    return <Navigate to="/notfind" replace />;
  }

  return (
    <div className="container-accommoadtion">
      <Navbar />
      <div className="pictures-carousel"></div>
      <div className="accommodation.title">
        <div className="accommodation.location"></div>
        <div className='accomodation-tag'><Tag tags={tags} /> </div>
    
      </div>
      
      <div className="collapse-page-accommodation">
        <Collapse title={'Description'} content={description} />
        <Collapse title={'Équipements'} content={equipments} />
      </div>

      <Footer />
    </div>
  );
}

export default Accommodation;
