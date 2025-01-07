import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DestinationPage from './pages/DestinationPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TravelPlanPage from './pages/TravelPlanPage'; // Import TravelPlanPage

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/destination/:destinationId" element={<DestinationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/travel-plan" element={<TravelPlanPage />} /> {/* Add the route for TravelPlanPage */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
