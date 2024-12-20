import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationPage = () => {
    const { id } = useParams();  // Retrieve the dynamic part of the URL

    return (
        <div>
            <h1>Destination Details</h1>
            <p>Displaying details for destination ID: {id}</p>
            {/* Here, you can add more detailed information based on the ID */}
        </div>
    );
};

export default DestinationPage;
