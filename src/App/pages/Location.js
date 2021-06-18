import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Header from '../../shared/components/Header';
import Button from '../../shared/components/Button';
import Map from '../../shared/components/Map';
import { updateLocation } from '../../store/actions/auth';

import styles from './Location.module.scss';

function Location() {
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();
  const [ coordinates, setCoordinates ] = useState(null);
  const [ location, setLocation ] = useState('');

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

  const applyButtonClickHandler = () => {
    console.log('>> ' + user._id + ' ' + location + ' ' + coordinates.lat + ' ' + coordinates.lng);
    dispatch(updateLocation(user._id, location, coordinates.lat, coordinates.lng));
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
            <div className={styles.locationDescription}>
              <p>Would you like to set <b>{location}</b> as your location?</p>
              <p>You may move a cursor on the map to change your location.</p>
            </div>
            <div className={styles.locationApply}>
              <Button className={styles.locationApplyButton} onClick={applyButtonClickHandler}>APPLY</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Location;
