import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FlatButton } from '../components-common/button';
import Spinner from '../components/Spinner';
import Map from '../components/Map';

import { useHttpClient } from '../hooks/http-hook';
import { updateLocation } from '../actions/auth';
import styles from './Location.module.scss';

function Location() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ coordinates, setCoordinates ] = useState(null);
  const [ locationName, setLocationName ] = useState('');
  const { sendRequest } = useHttpClient();

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
  
  const queryLocationName = useCallback(async (coords) => {
    try {
      const res = await sendRequest(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&result_type=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}&language=en`
      );
      setLocationName(res.results[0].address_components[0].long_name);
    } catch (error) {
      console.log(error);
    }
  }, [ sendRequest ]);

  useEffect(() => {
    if(coordinates !== null) {
      queryLocationName(coordinates);
    }
  }, [ coordinates, queryLocationName ]);

  const markerChangeHandler = useCallback(coords => {
    queryLocationName(coords);
  }, [ queryLocationName ]);

  const applyButtonClickHandler = () => {
    dispatch(updateLocation(locationName, coordinates.lat, coordinates.lng, history));
  }

  if(coordinates === null) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
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
              <FlatButton className={styles.locationApplyButton} onClick={applyButtonClickHandler}>APPLY</FlatButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
