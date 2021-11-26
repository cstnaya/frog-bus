import React from "react";
import logo from '../imgs/logo.svg';
import '../css/home.css';

const Home = () => {
    return (
        <main>
            <h1 id='home-heading'>
                <span>
                    <span>蛙蛙搭車 GO</span>
                    <span className='subtitle'>Where can I take this bus?</span>
                </span>
                <img src={logo} width='140' alt='蛙蛙搭車Go logo' />
            </h1>
            <ul className="home-tab">
                <li>
                    <span>
                        <a href={`${process.env.PUBLIC_URL}/#/routes`}>找路線</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href={`${process.env.PUBLIC_URL}/#/stops`}>找站牌</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href={`${process.env.PUBLIC_URL}/#/nearby`}>附近車站</a>
                    </span>
                </li>
            </ul>
        </main>
    );
};

export default Home;