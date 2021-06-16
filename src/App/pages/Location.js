import { useState } from 'react';

import Header from '../../shared/components/Header';
import Map from '../../shared/components/Map';

import styles from './Location.module.scss';

function Location() {
  const [ coordinates, setCoordinates ] = useState(null);

  if (!navigator.geolocation) {
    return console.log("Geolocation is not supported by your browser.");
  }

  navigator.geolocation.getCurrentPosition((position) => {
    setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
    console.log(position.coords);
  });

  return (
    <>
      <Header />
      <main>
        <div className={styles.mapContainer}>
          { coordinates && <Map center={coordinates} zoom={14} /> }
        </div>
      </main>
    </>
  );
}

export default Location;
