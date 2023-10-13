import React from 'react';
import Navbar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import Data from '../../data/Data.json';
import { Navigate, useParams } from 'react-router-dom';
import'./accommodation.css'
import './accommodation.css';
import Description from '../../components/description/Description';
import Carousel from '../../components/carousel/Carousel';

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
  const pictures = acommodationDetailSingle[0].pictures
  const description = acommodationDetailSingle[0].description;
  const equipments = acommodationDetailSingle[0].equipments;
  const tags = acommodationDetailSingle[0].tags;
  const locations = acommodationDetailSingle[0].location;
  const titles = acommodationDetailSingle[0].title;
  const hosts = acommodationDetailSingle[0].host;
  const rates = acommodationDetailSingle[0].rating;
  /** vérification si le tableau accomoodationDetailSingle est vide donc on redirige l"utilisateur vers la page notFond */
  if (acommodationDetailSingle.length === 0) {
    return <Navigate to="/notfind" replace />;
  }

  return (
    <div className="container-accommoadtion">
      <Navbar />
      <div className="pictures-carousel">
      <Carousel pictures ={pictures}/>
      </div>
      <div className="accommodation.title"></div>
      <Description
        description={description}
        equipments={equipments}
        title={titles}
        location={locations}
        tags={tags}
        host={hosts}
        rate={rates}
      />

      <Footer />
    </div>
  );
}

export default Accommodation;
