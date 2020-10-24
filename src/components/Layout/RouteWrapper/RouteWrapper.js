// Dependencies
import React from 'react';

// Components
import Navbar from '../Navbar';
import SideNav from '../SideNav';

const RouteWrapper = props => {
    return (
        <div className="route-wrapper">
            <Navbar />
            <div className="content">
                <SideNav />
                <div className="routes">{props.children}</div>
            </div>
        </div>
    );
};

export default RouteWrapper;
