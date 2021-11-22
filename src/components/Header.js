import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <Link to="/routes">routes </Link>
                <Link to="/stops">stops </Link>
                <Link to="/nearby">nearby </Link>
                <Link to="/">home </Link>
            </nav>
        </header>
    );
};

export default Header;