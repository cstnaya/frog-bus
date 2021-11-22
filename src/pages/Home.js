import React from "react";

const Home = () => {
    return (
        <>
            <h1>
                Logo
            </h1>
            <ul>
                <li>    
                    <a href={`${process.env.PUBLIC_URL}/#/routes`}>routes </a>
                </li>
                <li>
                    <a href={`${process.env.PUBLIC_URL}/#/stops`}>stops </a>
                </li>
                <li>
                    <a href={`${process.env.PUBLIC_URL}/#/nearby`}>nearby </a>
                </li>
            </ul>
        </>
    );
};

export default Home;