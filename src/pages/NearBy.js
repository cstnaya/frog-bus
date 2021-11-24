import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import api from "../apis/api";

const NearBy = () => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [results, setResults] = useState([]);

    const getStations = async ({lat, lon}) => {
        const MAX_DIS = 800;
        const q = `Station/NearBy/?$top=10&$spatialFilter=nearby(${lat}, ${lon}, ${MAX_DIS})&$format=JSON`;
        
        const  response = await api.get(q);
        return response;
    };

    useEffect(() => {
        if (location.lat === null || location.lon === null) { return ; }

        getStations(location).then(res => {
            const datas = res.data;
            const stops = datas.map(stop => ({ StationName: stop.StationName.Zh_tw, Bearing: stop.Bearing, StationPosition: stop.StationPosition }));
            setResults(stops);
        });

    }, [location]);

    const getLocation = () => {
        const showPosition = async (position) => {
            const { latitude, longitude } = await position.coords;
            setLocation({ lat: latitude, lon: longitude });
        };

        const errHandle = (err) => {
            console.log('error!');
        }; 

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition, errHandle);
        }
    };

    return (
        <>
            <Header />
            <button onClick={getLocation}>Click me!</button>
            <section>
                <ul>
                    { results.map((stop, idx) => <li key={idx}>{stop.StationName}</li>) }
                </ul>
            </section>
        </>
    );
};

export default NearBy;