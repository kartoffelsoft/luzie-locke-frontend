import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../shared/components/Header';
import Map from '../../shared/components/Map';

import styles from './Location.module.scss';

function Location() {
  const [ coordinates, setCoordinates ] = useState(null);
  const [ location, setLocation ] = useState('Frankfurt');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
        console.log(position.coords);
      });
    } else {
      console.log("Geolocation is not supported by your browser.");
      setCoordinates({ lat: 52.5069312, lng: 13.1445523 });
    }
  }, []);

  const markerChangeHandler = async (coords) => {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&result_type=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    setLocation(res.data.results[0].address_components[0].long_name);
  }

  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.map}>
            { coordinates && <Map center={coordinates} zoom={14} onMarkerChange={markerChangeHandler} /> }
          </div>
          <div className={styles.location}>
            <div className={styles.locationName}>
              {location}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Location;
