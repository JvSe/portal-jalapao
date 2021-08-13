import duna from '../assets/pins/duna.png';
import cachoeira from '../assets/pins/cachoeiras.png';
import canion from '../assets/pins/canion.png';
import pousada from '../assets/pins/pousada.png';
import restaurante from '../assets/pins/restaurante.png';
import rio from '../assets/pins/rio.png';
import rock from '../assets/pins/rock.png';
import serra from '../assets/pins/serra.png';
import praia from '../assets/pins/praia.png';

const listPins = [
    {
        img:duna,
        name:"Dunas"
    }, 
    {
        img:cachoeira,
        name:"Cachoeiras"
    }, 
    {
        img:canion,
        name:"Cânios"
    }, 
    {
        img:pousada,
        name:"Pousadas e Hotéis"
    }, 
    {
        img:restaurante,
        name:"Restaurantes"
    }, 
    {
        img:rio,
        name:"Rios, Lagos e Fervedouros"
    }, 
    {
        img:rock,
        name:"Pedras e Arcos"
    }, 
    {
        img:serra,
        name:"Serras e Morros"
    }, 
    {
        img:praia,
        name:"Praias"
    }
]

const LegendPins = () => {
    return(
        <div className="centerTotal flex-col containerLegend effectGlow">
            <h1 className="legendasText">Legendas</h1>
            {listPins.map(pins => (
                <div className="centerTotal containerPinLegend">
                    <img className="imgPin" src={pins.img} alt="pins.name" />
                    <p className="legendPinsText" >{pins.name}</p>
                </div>
            ))}
        </div>
    )
}

export default LegendPins