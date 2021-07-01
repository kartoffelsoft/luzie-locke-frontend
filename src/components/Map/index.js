import React, { Component, createRef } from 'react';

import styles from './index.module.scss';

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
    this.mapRef = createRef();
    this.buffer = document.createElement('canvas');

    this.canvasContext = null;
    this.bufferContext = null;
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapRef.current, {
      center: this.props.center,
      zoom: this.props.zoom,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    });

    const marker = new window.google.maps.Marker({ 
      position: this.props.center, 
      map: this.map, 
      draggable: true });

    new window.google.maps.event.addListener(marker, 'dragend', (evt) => {
      console.log(this.props);
      this.props.onMarkerChange({ lat: evt.latLng.lat(), lng: evt.latLng.lng() });
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props === null; 
  }

  render() {
    return (
      <div ref={this.mapRef} className={styles.map}></div>
    )
  }
}

export default Map;
