import PinMap from '../components/PinMap';
import duna from '../assets/pins/duna.png';
import cachoeira from '../assets/pins/cachoeiras.png';
import canion from '../assets/pins/canion.png';
import pousada from '../assets/pins/pousada.png';
import restaurante from '../assets/pins/restaurante.png';
import rio from '../assets/pins/rio.png';
import rock from '../assets/pins/rock.png';
import serra from '../assets/pins/serra.png';
import praia from '../assets/pins/praia.png';
import rota from '../assets/pins/rota.svg';

import logo from '../assets/logo.png';

import {mouseWheelZoom} from '../components/wheelzoom';
import listaPontosTuristicos from '../pinsMapsStore';

import { useEffect } from 'react';

var newListPoint = [];

(function pinsForList(){
  var objTuristico = {};
  for(let pin of listaPontosTuristicos) {
    if(pin.img === 'img1') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:duna,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img2') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:pousada,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if (pin.img === 'img3') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:restaurante,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img4') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:cachoeira,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img5') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:rio,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img6') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:rock,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img7') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:canion,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img8') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:serra,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    } else if(pin.img === 'img9') {
      objTuristico = {
        id:pin.id,
        name: pin.name,
        img:praia,
        top:pin.top,
        left:pin.left,
        cidade:pin.cidade,
        descricao:pin.descricao
      }
    }

    newListPoint.push(objTuristico);
  }
})()

console.log(newListPoint);

const MapGeral = () => {
  
  useEffect(() => {
    const wz = mouseWheelZoom({
      element: document.getElementById('mapZoom'),
      zoomStep:0.25
    });

    wz.reset();
  })

  return(
    <div className="centerTotal containerMap flex-col" >
      <div className="centerTotal">
        <img className="imgLogo" src={logo} alt="Logo Encantos do Jalapão" />
      </div>
      <img id="mapZoom" src={rota} alt="Rota Principal" className="imgRota" />
      {newListPoint.map(pointTuristic => (
        <PinMap 
          key={pointTuristic.id} 
          point={pointTuristic}/>
      ))}
    </div>
  );
}

export default MapGeral;

/**
 * <iframe 
      src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1003115.2003653287!2d-47.70811569442155!3d-10.85572062457632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x933b3439911f1257%3A0x93b8070d05c818f!2sPalmas%2C%20TO!3m2!1d-10.249091!2d-48.3242858!4m5!1s0x9330901312beb9c3%3A0xfac89182d37bc491!2sPonte%20Alta%20do%20Tocantins%20-%20TO!3m2!1d-10.743794399999999!2d-47.5382471!4m5!1s0x9337727f30fcee3b%3A0xe8bd1628cea92a14!2sAlmas%2C%20TO!3m2!1d-11.568909999999999!2d-47.1702418!4m5!1s0x9331716b9567f1c3%3A0x353dace522dd8ab8!2sMateiros%2C%20TO!3m2!1d-10.546680799999999!2d-46.416799999999995!4m5!1s0x9331daf114c308cd%3A0x5d3fc53e2b4ca88c!2sS%C3%A3o%20F%C3%A9lix%20do%20Tocantins%20-%20TO!3m2!1d-10.1695639!2d-46.657710699999996!4m5!1s0x933b3439911f1257%3A0x93b8070d05c818f!2sPalmas%2C%20TO!3m2!1d-10.249091!2d-48.3242858!5e0!3m2!1spt-BR!2sbr!4v1626379981426!5m2!1spt-BR!2sbr" 
      width="100%" 
      height="100%" 
      allowfullscreen="" 
      loading="lazy" 
    />
 */