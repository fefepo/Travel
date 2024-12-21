import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './NavBar.css';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState(''); // State for logout message
  const [showMessage, setShowMessage] = useState(false); // State for controlling the message display
  const navigate = useNavigate();

  // Listen for auth state changes
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(setUser); // Set user state when auth state changes
    return () => unsubscribe(); // Clean up the listener when the component is unmounted
  }, []);

  // Handle logout
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth); // Sign out the user
      setLogoutMessage('logged out'); // Set the logout message
      setShowMessage(true); // Show the logout message
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  // Handle confirmation to go to homepage
  const handleConfirm = () => {
    setShowMessage(false); // Hide the message
    navigate('/'); // Redirect to the homepage
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/travel-plan">
            <button className="navbar-button">Travel plan</button>
          </Link>
        </li>
      </ul>
      <ul className="auth-links">
        {user ? (
          // Show logout button if the user is logged in
          <li>
            <button className="navbar-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          // Show login and signup buttons if the user is not logged in
          <>
            <li>
              <Link to="/login">
                <button className="navbar-button">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="navbar-button">Sign Up</button>
              </Link>
            </li>
          </>
        )}
      </ul>

      {showMessage && (
        <div className="logout-message-container">
          <p className="logout-message">{logoutMessage}</p>
          <button className="confirm-button" onClick={handleConfirm}>
            check
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
