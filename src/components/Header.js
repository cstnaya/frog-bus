import React from "react";
import '../css/header.css';
import logo from '../imgs/logo_line.svg';

const Header = () => {
    // set active to current page in tab.
    const url = window.location.href;
    const page = url.split('#/')[1];    
    const activeClass = (term) => (page === term) ? "active" : '';

    return (
        <header>
            <nav>
                <ul>
                    <li className={activeClass('routes')}>
                        <a href={`${process.env.PUBLIC_URL}/#/routes`}>找路線</a>
                    </li>
                    <li className={activeClass('stops')}>
                        <a href={`${process.env.PUBLIC_URL}/#/stops`}>找站牌</a>
                    </li>
                    <li className={activeClass('nearby')}>
                        <a href={`${process.env.PUBLIC_URL}/#/nearby`}>附近車站</a>
                    </li>
                    <li>
                        <a href={`${process.env.PUBLIC_URL}/#/`}>回首頁</a>
                    </li>
                </ul>
            </nav>
            <h1 className="h1-logo">
                <a href={`${process.env.PUBLIC_URL}/#/`}>
                    <img src={logo} width="100" />
                    <span>蛙蛙搭車 Go</span>
                </a>
            </h1>
        </header>
    );
};

export default Header;