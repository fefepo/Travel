import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import NavBar from '../pages/NavBar'; // Import NavBar component
import './MainPage.css';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query
  const navigate = useNavigate(); // Hook to navigate to a specific URL

  // Define a map for destinations
  const destinations = {
    paris: '/destination/1',
    tokyo: '/destination/2',
    'new york': '/destination/3'
  };

  // Function to handle search
  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase().trim(); // Standardize the query
    if (destinations[lowerCaseQuery]) {
      navigate(destinations[lowerCaseQuery]); // Redirect if the destination exists
      setSearchQuery(''); // Optionally clear the search input after redirection
    } else {
      alert('Destination not found!'); // Alert if no match is found
    }
  };

  // Function to handle pressing the Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior (if any)
      handleSearch(); // Trigger search when Enter key is pressed
    }
  };

  return (
    <div className="main-container">
      <header className="header">
        <NavBar /> {/* Include the navigation bar */}
        <h1>Travel Recommendation</h1>
        <p>Discover your next adventure</p>
      </header>

      <main className="main-content">
        <section className="search-section">
          <input
            type="text"
            id="search-bar"
            placeholder="Search for destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
            onKeyDown={handleKeyDown} // Trigger search when pressing Enter key
          />
          <button onClick={handleSearch}>Search</button>
        </section>

        <section className="destinations">
          <div className="destination" id="destination1">
            <h3>
              <Link to="/destination/1">Paris</Link>
            </h3>
            <p>Explore the city of love!</p>
          </div>
          <div className="destination" id="destination2">
            <h3>
              <Link to="/destination/2">Tokyo</Link>
            </h3>
            <p>Experience the blend of tradition and modernity.</p>
          </div>
          <div className="destination" id="destination3">
            <h3>
              <Link to="/destination/3">New York</Link>
            </h3>
            <p>The city that never sleeps.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Travel Recommendation</p>
      </footer>
    </div>
  );
};

export default MainPage;
