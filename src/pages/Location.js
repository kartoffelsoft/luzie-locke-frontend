import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FlatButton } from '../components-common/button';
import { BasicSpinner } from '../components-common/spinner';
import Map from '../components/Map';

import { useHttpClient } from '../hooks/http-hook';
import { useAuth } from '../contexts/AuthProvider';

import styles from './Location.module.scss';

function Location() {
  const history = useHistory();
  const [coordinates, setCoordinates] = useState(null);
  const [locationName, setLocationName] = useState('');
  const { sendRequest } = useHttpClient();
  const { auth, updateLocation } = useAuth();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('Geolocation is not supported by your browser.');

      if (auth?.location?.name) {
        setCoordinates({
          lat: auth.location.geoJSON.coordinates[0],
          lng: auth.location.geoJSON.coordinates[1],
        });
      } else {
        setCoordinates({ lat: 52.5069312, lng: 13.1445523 });
      }
    }
  }, [auth]);

  const queryLocationName = useCallback(
    async (coords) => {
      try {
        const res = await sendRequest(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&result_type=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}&language=en`
        );
        setLocationName(res.results[0].address_components[0].long_name);
      } catch (error) {
        console.log(error);
      }
    },
    [sendRequest]
  );

  useEffect(() => {
    if (coordinates !== null) {
      queryLocationName(coordinates);
    }
  }, [coordinates, queryLocationName]);

  const markerChangeHandler = useCallback(
    (coords) => {
      queryLocationName(coords);
    },
    [queryLocationName]
  );

  const applyButtonClickHandler = () => {
    updateLocation(locationName, coordinates.lat, coordinates.lng);
    history.push('/');
  };

  if (coordinates === null) {
    return <BasicSpinner />;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.map}>
            <Map
              center={coordinates}
              zoom={14}
              onMarkerChange={markerChangeHandler}
            />
          </div>
          <div className={styles.location}>
            <div className={styles.locationName}>{locationName}</div>
            <div className={styles.locationDescription}>
              <p>
                Would you like to set <b>{locationName}</b> as your location?
              </p>
              <p>You may move a cursor on the map to change your location.</p>
            </div>
            <div className={styles.locationApply}>
              <FlatButton
                className={styles.locationApplyButton}
                onClick={applyButtonClickHandler}
              >
                APPLY
              </FlatButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
