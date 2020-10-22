import React from 'react';
import Navbar from '../Navbar';

const RouteWrapper = props => {
    return (
        <div className="route-wrapper">
            <Navbar />
            {props.children}
        </div>
    );
};

export default RouteWrapper;
