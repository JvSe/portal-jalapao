import { useState } from 'react';
import MapGeral from '../pages/MapGeral';
import '../styles/pages/App.scss';

const App = () => {
  const [modal, setModal] = useState(false);

  return(
    <>
      <MapGeral /> 
    </>
  );
}

export default App;

/**
 * <div style={{position:'absolute', left:'0', top:'0'}}>
        <InfoPointTourism />
      </div>
 */