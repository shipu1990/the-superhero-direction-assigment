import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={logo} />
            </div>
            <h2 className="project-title">Plan Your Concert With us</h2>
            <p className="header-para">With a perfect blend of experience and passion, Dhaka Concert Planner is an Concert management company in Bangladesh. We’ve emerged as a company with ideas to turn your corporate or personal Concert into something worth remembering. </p>
        </div>
    );
};

export default Header;