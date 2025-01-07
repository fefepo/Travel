import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Google Maps components

const DestinationPage = () => {
  const [showMap, setShowMap] = useState(false); // Whether to show the map or not
  const [selectedLocation, setSelectedLocation] = useState(null); // Selected location info
  const navigate = useNavigate();
  const { destinationId } = useParams(); // Get the destinationId from the URL

  // Coordinates for the locations
  const locations = {
    paris: {
      louvre: { lat: 48.8606, lng: 2.3376 }, // Louvre Museum
      eiffel: { lat: 48.8584, lng: 2.2945 }, // Eiffel Tower
    },
    tokyo: {
      meijiShrine: { lat: 35.6764, lng: 139.6993 }, // Meiji Shrine
      sensoji: { lat: 35.7148, lng: 139.7967 }, // Sensoji Temple
    },
    'new york': {
      statueOfLiberty: { lat: 40.6892, lng: -74.0445 }, // Statue of Liberty
      timesSquare: { lat: 40.7580, lng: -73.9855 }, // Times Square
    },
    // Add other cities and their landmarks here as needed
  };

  // Set the location based on the destinationId from the URL
  useEffect(() => {
    if (['paris', 'tokyo', 'new york'].includes(destinationId)) {
      setSelectedLocation(null); // Clear any previous selection
      setShowMap(false); // Hide map initially
    } else {
      // If destinationId is invalid, show the "Unknown Destination"
      setSelectedLocation(null); // Clear any previous selection
      setShowMap(false); // Hide map
    }
  }, [destinationId]);

  const handleLocationClick = (location) => {
    const city = destinationId; // Get the current city from the URL
    setSelectedLocation(locations[city][location]);
    setShowMap(true);
  };

  // Check if destinationId is valid before rendering
  const cityName = ['paris', 'tokyo', 'new york'].includes(destinationId)
    ? destinationId.charAt(0).toUpperCase() + destinationId.slice(1)
    : 'Unknown Destination';

  return (
    <div className="destination-page">
      <h2>{cityName}</h2> {/* Check if destinationId is valid */}

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

      {showMap && selectedLocation && (
        <div className="map-container">
          <h3>Location Map</h3>
          <LoadScript googleMapsApiKey="AIzaSyDJgGUbFyAGaXiTuCwD3Gwc4wQgHFPqNmA">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={selectedLocation}
              zoom={15}
            >
              <Marker position={selectedLocation} />
            </GoogleMap>
          </LoadScript>
        </div>
      )}

      <button onClick={() => navigate('/')}>Back to Main</button>
    </div>
  );
};

export default DestinationPage;
