import { useState } from 'react';
import InfoPointTourism from '../components/InfoPointTourism';
import { FaTimes } from 'react-icons/fa';
import pin from '../assets/pins/pin.png';

const PinMap = props => {
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
        <>
            <div className="centerTotal containerPinMap flex-col" onClick={button} style={{top:`${props.point.top}px`, left:`${props.point.left}px`}}>
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