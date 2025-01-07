import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const DestinationPage = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  const { destinationId } = useParams();

  const locations = {
    paris: {
      louvre: { lat: 48.8606, lng: 2.3376 },
      eiffel: { lat: 48.8584, lng: 2.2945 },
    },
    tokyo: {
      meijiShrine: { lat: 35.6764, lng: 139.6993 },
      sensoji: { lat: 35.7148, lng: 139.7967 },
    },
    'new york': {
      statueOfLiberty: { lat: 40.6892, lng: -74.0445 },
      timesSquare: { lat: 40.7580, lng: -73.9855 },
    },
  };

  useEffect(() => {
    setSelectedLocation(null);
    setShowMap(false);
  }, [destinationId]);

  const handleLocationClick = (location) => {
    const city = destinationId;
    setSelectedLocation(locations[city][location]);
    setShowMap(true);
  };

  return (
    <div className="destination-page">
      <h2>{destinationId.charAt(0).toUpperCase() + destinationId.slice(1)}</h2>

      <div className="destination-buttons">
        {destinationId === 'paris' && (
          <>
            <button onClick={() => handleLocationClick('louvre')}>Louvre Museum</button>
            <button onClick={() => handleLocationClick('eiffel')}>Eiffel Tower</button>
          </>
        )}
        {destinationId === 'tokyo' && (
          <>
            <button onClick={() => handleLocationClick('meijiShrine')}>Meiji Shrine</button>
            <button onClick={() => handleLocationClick('sensoji')}>Sensoji Temple</button>
          </>
        )}
        {destinationId === 'new york' && (
          <>
            <button onClick={() => handleLocationClick('statueOfLiberty')}>Statue of Liberty</button>
            <button onClick={() => handleLocationClick('timesSquare')}>Times Square</button>
          </>
        )}
      </div>

      {showMap && selectedLocation ? (
        <div className="map-container">
          <h3>Location Map</h3>
          <LoadScript googleMapsApiKey="AIzaSyBG5pTfnioNxf8XXviDgL_55zsw2mOfDGY">
            <GoogleMap
              key={destinationId}
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={selectedLocation}
              zoom={15}
            >
              <Marker position={selectedLocation} />
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <div className="loading-container">
          <p>Location Map Loading...</p>
        </div>
      )}

      <button onClick={() => navigate('/')}>Go back to Main page</button>
    </div>
  );
};

export default DestinationPage;
