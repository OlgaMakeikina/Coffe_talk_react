import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMediaQuery } from 'react-responsive';
import './contact.css'

const ObjectMap = () => {
  const objectPosition = [51.505, -0.09]; 
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <MapContainer
      className='map'
      center={objectPosition}
      zoom={17}
      style={{ width: isMobile ? '90%' : '50%', height: isMobile ? '300px' : '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={objectPosition}>
        <Popup>Object Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ObjectMap;