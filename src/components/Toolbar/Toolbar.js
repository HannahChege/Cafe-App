import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
        <div>
        <div DrawerToggleButton />
        </div>
            <div className="toolbar__logo">  Yummy Cafe </div>
            <div class="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li> <a href="/">Products</a></li>
                    <li> <a href="/">Users</a></li>
                        </ul> </div>
        </nav>
    </header>
);

export default toolbar;

