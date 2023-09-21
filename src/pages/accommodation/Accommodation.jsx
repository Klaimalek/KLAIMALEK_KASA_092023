import React from 'react'
import Navbar from '../../components/navBar/NavBar'
import Carousel from '../../components/carousel/Carousel'
import Data from '../../data/Data.json'
import { useParams } from "react-router-dom";
function Accommodation() {
    let selectedId = useParams();
    let accommodationTitle;
    let accommodationPicture;
    let accommodationDescription;
    let accommodationEquipement;
    let accommodationLocation;
    Data.forEach((logement) => {
        if(logement.id === selectedId.id){
            accommodationTitle = logement.title
            accommodationPicture= logement.pictures
            accommodationDescription = logement.description
            accommodationEquipement = logement.equipments
            accommodationLocation = logement.location
        }
        
    })
   console.log(accommodationPicture);
    
  return (
    <div className='container-accommoadtion'>
    <Navbar/>
    <Carousel title={accommodationTitle} picture ={accommodationPicture}/>
    <div className='information-logement'>
     >
    </div>
    </div>
  )
}

export default Accommodation