import React, { useRef, useEffect } from 'react';

import styles from './index.module.scss';

const Map = props => {
  const mapRef = useRef();

  const { center, zoom, onMarkerChange } = props;

  useEffect(() => {
    console.log("Calling google map");
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    });

    const marker = new window.google.maps.Marker({ position: center, map: map, draggable: true });

    new window.google.maps.event.addListener(marker, 'dragend', function (evt) {
      onMarkerChange({ lat: evt.latLng.lat(), lng: evt.latLng.lng() });
    });

  }, [center, zoom, onMarkerChange])

  return <div ref={mapRef} className={styles.map}></div>
}

export default Map;
