import { useState, useEffect } from 'react';
import InfoPointTourism from '../components/InfoPointTourism';
import { FaTimes } from 'react-icons/fa';
import pin from '../assets/pins/pin.png';


const PinMap = props => {
    const [modal, setModal] = useState(false);
    const [animation, setAnimation] = useState('animation-in');
    const [zoom, setZoom] = useState(1);
    const [posT, setPosT] = useState(props.point.top)
    const [posL, setPosL] = useState(props.point.left)

    var currentZoom = zoom;
    var currentPosT = posT;
    var currentPosL = posL;

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


    window.addEventListener('wheel', e => {
        e.preventDefault();
        if(e.deltaY < 0) {
            currentZoom += 0.05;
            currentPosT += currentPosT * 0.05;
            currentPosL += currentPosL * 0.05;

            console.log(currentZoom)
            console.log(currentPosT)
            console.log(currentPosL)

            setPosT(currentPosT);
            setPosL(currentPosL);

        } else {
            currentZoom -= 0.05;
            currentPosT -= currentPosT * 0.05;
            currentPosL -= currentPosL * 0.05;

            setPosT(currentPosT);
            setPosL(currentPosL);
        }
    }, {passive:true})
    return(
        <>
            
            <div data-wheel-pin className="centerTotal containerPinMap flex-col" onClick={button} style={{top:`${posT}px`, left:`${posL}px`}}>
                <img src={props.point.img} alt={props.point.name} className="pinPic" />
                <img src={pin} alt="pin svg" className="pinBottom" />

                <div className="centerTotal containerPinPopup">
                    <h3> {props.point.name} </h3>
                </div>
            </div>
            
            <div className="centerTotal modal">
                {modal === true &&
                    <InfoPointTourism animation={animation} point={props.point}>
                        <FaTimes onClick={button} size={'30px'} color={"black"}/>
                    </InfoPointTourism>
                }
            </div>
        </>
    );
}

export default PinMap;