import React, { useRef, useEffect } from 'react';

import styles from './index.module.scss';

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom])

  return <div ref={mapRef} className={styles.map}></div>
}

export default Map;
