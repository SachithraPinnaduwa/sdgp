'use client';
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapButton = () => {
  const [showMap, setShowMap] = useState(false);

  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: -25.344, lng: 131.036
  }

  return (
    <div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowMap(!showMap)}
      >
        Current Location
      </button>
      {showMap && (
        <LoadScript googleMapsApiKey="AIzaSyCN9gI8eZ4-sGc-NJHesuqx7J-gD0AGJic">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
      )}
    </div>
  );
};

export default MapButton;
