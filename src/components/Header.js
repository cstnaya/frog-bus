import React from "react";

const Header = () => {

    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <a href={`${process.env.PUBLIC_URL}/#/routes`}>routes </a>
                <a href={`${process.env.PUBLIC_URL}/#/stops`}>stops </a>
                <a href={`${process.env.PUBLIC_URL}/#/nearby`}>nearby </a>
                <a href={`${process.env.PUBLIC_URL}/#/`}>home </a>
            </nav>
        </header>
    );
};

export default Header;