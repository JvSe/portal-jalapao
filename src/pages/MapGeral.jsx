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
import rota from '../assets/rotaprincipal.svg';

// import logo from '../assets/logo.png';

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


const MapGeral = () => {
  
  useEffect(() => {
    const wz = mouseWheelZoom({
      element: document.querySelector('[data-wheel-zoom]'),
      zoomStep:0.05
    });
    wz.reset();
  })

  return(
    <div data-wheel-zoom className="centerTotal containerMap flex-col" >
        <img src={rota} alt="Imagem da rota principal" style={{width:'100%'}} />
        
        {newListPoint.map(pointTuristic => (
          <PinMap 
            key={pointTuristic.id} 
            point={pointTuristic}
          />
            
        ))}
    </div>
  );
}

export default MapGeral;

/**
 * {newListPoint.map(pointTuristic => (
            <PinMap 
              key={pointTuristic.id} 
              point={pointTuristic}/>
          ))}

          <div data-wheel-zoom >
          <img alt="rotas" src={rota} style={{height:'100%', width:'100%'}}/>
        </div>
 */