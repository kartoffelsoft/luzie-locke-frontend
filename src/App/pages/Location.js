import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from '../../shared/components/Header';
import Button from '../../shared/components/Button';
import Map from '../../shared/components/Map';
import { updateLocation } from '../../store/actions/auth';

import styles from './Location.module.scss';

function Location() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ coordinates, setCoordinates ] = useState(null);
  const [ locationName, setLocationName ] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
      });
    } else {
      console.log("Geolocation is not supported by your browser.");

      const user = JSON.parse(localStorage.getItem('profile'));
      
      if(user?.location?.name) {
        setCoordinates({ lat: user.location.geoJSON.coordinates[0], lng: user.location.geoJSON.coordinates[1] });
      } else {
        setCoordinates({ lat: 52.5069312, lng: 13.1445523 });
      }
    }
  }, []);
  
  useEffect(() => {
    if(coordinates !== null) {
      queryLocationName(coordinates);
    }
  }, [coordinates]);

  const queryLocationName = async (coords) => {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&result_type=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    setLocationName(res.data.results[0].address_components[0].long_name);
  } 

  const markerChangeHandler = useCallback(coords => {
    queryLocationName(coords);
  }, []);

  const applyButtonClickHandler = () => {
    dispatch(updateLocation(locationName, coordinates.lat, coordinates.lng, history));
  }
  
  const renderLocation = () => {
    console.log(coordinates);
    return <>
      <div className={styles.container}>
        <div className={styles.map}>
          <Map center={coordinates} zoom={14} onMarkerChange={markerChangeHandler} />
        </div>
        <div className={styles.location}>
          <div className={styles.locationName}>
            {locationName}
          </div>
          <div className={styles.locationDescription}>
            <p>Would you like to set <b>{locationName}</b> as your location?</p>
            <p>You may move a cursor on the map to change your location.</p>
          </div>
          <div className={styles.locationApply}>
            <Button className={styles.locationApplyButton} onClick={applyButtonClickHandler}>APPLY</Button>
          </div>
        </div>
      </div>
    </>;
  }

  return (
    <>
      <Header />
      <main>
        { coordinates && renderLocation() }
      </main>
    </>
  );
}

export default Location;
