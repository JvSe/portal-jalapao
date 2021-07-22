import { useState } from 'react';
import InfoPointTourism from '../components/InfoPointTourism';
import '../styles/pages/MapGeral.scss';
import { FaTimes } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const MapGeral = () => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState('animation-in');

  const button = () => {
    if(modal === false) {
      setAnimation('animation-in');
    } else {
      setAnimation('animation-out');
    }
    setTimeout(() => {
      setModal(!modal);
    }, 500);

  }

  return(
    <div className="centerTotal containerMap">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1003115.2003653287!2d-47.70811569442155!3d-10.85572062457632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x933b3439911f1257%3A0x93b8070d05c818f!2sPalmas%2C%20TO!3m2!1d-10.249091!2d-48.3242858!4m5!1s0x9330901312beb9c3%3A0xfac89182d37bc491!2sPonte%20Alta%20do%20Tocantins%20-%20TO!3m2!1d-10.743794399999999!2d-47.5382471!4m5!1s0x9337727f30fcee3b%3A0xe8bd1628cea92a14!2sAlmas%2C%20TO!3m2!1d-11.568909999999999!2d-47.1702418!4m5!1s0x9331716b9567f1c3%3A0x353dace522dd8ab8!2sMateiros%2C%20TO!3m2!1d-10.546680799999999!2d-46.416799999999995!4m5!1s0x9331daf114c308cd%3A0x5d3fc53e2b4ca88c!2sS%C3%A3o%20F%C3%A9lix%20do%20Tocantins%20-%20TO!3m2!1d-10.1695639!2d-46.657710699999996!4m5!1s0x933b3439911f1257%3A0x93b8070d05c818f!2sPalmas%2C%20TO!3m2!1d-10.249091!2d-48.3242858!5e0!3m2!1spt-BR!2sbr!4v1626379981426!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        allowfullscreen="" 
        loading="lazy" 
      />
      
      <button onClick={button} style={{cursor:'pointer'}}>
        Botão
      </button>

      {modal === true &&
        <InfoPointTourism animation={animation}>
          <FaTimes onClick={button} size={'30px'} color={"black"}/>
        </InfoPointTourism>
      }
      
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