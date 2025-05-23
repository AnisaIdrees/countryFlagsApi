

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ lat, lng, country }) {
  if (lat === null || lng === null) {
    return <p>Location data is not available.</p>;
  }

  return (
    <div className="map-wrapper p-2 bg-[white] mt-5 mb-5" >
      <MapContainer center={[lat, lng]} zoom={5} scrollWheelZoom={true} className="map-container ">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>{country}</Popup>
        </Marker>
      </MapContainer>
    </div>

  );
}

export default Map;
