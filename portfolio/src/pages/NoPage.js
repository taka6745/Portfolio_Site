import React from 'react';
import './NoPage.css';

const NoPage = () => {
    return (
        <div className="no-page-container">
            <div className="no-page-content">
                <h1>Error 404</h1>
                <p>Oops! The page you are looking for does not exist.</p>
                <a href="/" className="no-page-home-link">Return to Homepage</a>
            </div>
        </div>
    );
};

export default NoPage;
