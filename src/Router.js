import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';  // Updated path
import DestinationPage from './pages/DestinationPage'; // Another page for detailed destination info

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/destination/:id" element={<DestinationPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
