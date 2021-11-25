import React from "react";

const Header = () => {
    // set active to current page in tab.
    const url = window.location.href;
    const page = url.split('#/')[1];    
    const activeClass = (term) => (page === term) ? "active" : '';

    return (
        <header>
            <h1>
                <a href={`${process.env.PUBLIC_URL}/#/`}>Logo</a>
            </h1>
            <nav>
                <ul>
                    <li className={activeClass('routes')}>
                        <a href={`${process.env.PUBLIC_URL}/#/routes`}>routes</a>
                    </li>
                    <li className={activeClass('stops')}>
                        <a href={`${process.env.PUBLIC_URL}/#/stops`}>stops</a>
                    </li>
                    <li className={activeClass('nearby')}>
                        <a href={`${process.env.PUBLIC_URL}/#/nearby`}>nearby</a>
                    </li>
                    <li>
                        <a href={`${process.env.PUBLIC_URL}/#/`}>home</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;