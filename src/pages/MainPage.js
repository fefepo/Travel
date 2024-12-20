// src/pages/MainPage.js
import React from 'react'; 
import { Link } from 'react-router-dom'; // Import Link here
import NavBar from '../pages/NavBar'; // Import NavBar component
import './MainPage.css'; 

const MainPage = () => { 
    return ( 
        <div className="main-container"> 
            <header className="header"> 
                <NavBar />  {/* Include the navigation bar */} 
                <h1>Travel Recommendation</h1> 
                <p>Discover your next adventure</p> 
            </header> 

            <main className="main-content"> 
                <section className="search-section"> 
                    <input type="text" id="search-bar" placeholder="Search for destinations..." /> 
                    <button>Search</button> 
                </section> 

                <section className="destinations"> 
                    <h2>Recommended Destinations</h2> 
                    <div className="destination" id="destination1"> 
                        <h3><Link to="/destination/1">Paris</Link></h3> 
                        <p>Explore the city of love!</p> 
                    </div> 
                    <div className="destination" id="destination2"> 
                        <h3><Link to="/destination/2">Tokyo</Link></h3> 
                        <p>Experience the blend of tradition and modernity.</p> 
                    </div> 
                    <div className="destination" id="destination3"> 
                        <h3><Link to="/destination/3">New York</Link></h3> 
                        <p>The city that never sleeps.</p> 
                    </div> 
                </section> 
            </main> 

            <footer className="footer"> 
                <p>&copy; 2024 Travel Recommendation</p> 
            </footer> 
        </div> 
    ); 
};

export default MainPage;
