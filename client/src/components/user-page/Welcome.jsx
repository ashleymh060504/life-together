import React from 'react';
import './Welcome.css';

function Welcome() {
    return(
        <>
            <div className="titles pt-4">
                <h1 className="landingpage-title">{'<USER NAME>'}</h1>
                <h2 className="landingpage-subtitle">Get sh*t done.</h2>
            </div>
        </>
    );
};

export default Welcome;