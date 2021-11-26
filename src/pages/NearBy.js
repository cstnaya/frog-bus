import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import api from "../apis/api";
import mapboxgl from "mapbox-gl";
import { Bearings } from "../widgets/widgets";
import SearchNoResult from "../components/SearchNoResult";
import '../css/nearby.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MAX_DIS = 500;
const MAX_NUM_STOPS = 10;

const diffCenterToPoint = (x, y) => {
    const lat1 = x.lat, lat2 = y.PositionLat;
    const lon1 = x.lon, lon2 = y.PositionLon;
    
    const R = 6371;
    const deg2rad = (deg) => deg * (Math.PI / 180);

    const dLat = deg2rad(lat2 - lat1), dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c * 1000); // distance in km => m
}

const NearBy = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [results, setResults] = useState([]);
    const [inited, setInited] = useState(false);

    const getLocation = (e) => {
        const storePosition = async (position) => {
            const { latitude, longitude } = await position.coords;
            setLocation({ lat: latitude, lon: longitude });
        };

        const errHandle = (err) => {
            console.log('error!');
        };

        e.target.style.display = 'none';

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(storePosition, errHandle);
        }
    };

    const createMarker = (type, position, text) => {
        const ele = document.createElement('div');
        ele.className = type;

        if (map.current) {
            new mapboxgl.Marker(ele)
                .setLngLat(position)
                .setPopup(
                    new mapboxgl.Popup({ offset: 20 }).setHTML(text)
                )
                .addTo(map.current);
        }
    };

    const setupMap = async () => {
        if (map.current) return ;

        // create map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/tn-o/ckweg9qi6094515mv8bt3mdil',
            center: [location.lon, location.lat],
            sprite: "mapbox://sprites/mapbox/streets-v9",
            zoom: 15,
        });

    };

    const setupCenter = () => {
        // clear last position node
        const center = document.querySelector('.nowPosition');
        if (center) { center.remove(); }

        // create user's position node
        createMarker('nowPosition', [location.lon, location.lat], '現在位置');
    };

    const getStations = async ({lat, lon}) => {
        const q = `Station/NearBy/?$spatialFilter=nearby(${lat}, ${lon}, ${MAX_DIS})&$format=JSON`;
        const  response = await api.get(q);
        return response;
    };

    useEffect(() => {
        if (location.lat === null || location.lon === null) { return ; }

        if (!inited) {
            setInited(true);

            setupMap()
                .then(() => setupCenter())
                .then(() => getStations(location))
                .then(res => {
                    const datas = res.data;
                    const stops = datas.map(stop => ({ StationName: stop.StationName.Zh_tw, 
                                                    Bearing: Bearings[stop.Bearing], 
                                                    StationPosition: stop.StationPosition,
                                                    Distance: diffCenterToPoint(location, stop.StationPosition),
                                                    }));
                    
                    const s = new Set(stops.map(data => JSON.stringify(data)));
                    const ss = [...s].map(data => JSON.parse(data));

                    ss.sort((a, b) => a.Distance - b.Distance);
                    const nearestStops = ss.splice(0, MAX_NUM_STOPS);
                    setResults(nearestStops);
                });
        }  else {
            setupCenter();
        }
    }, [location]);

    useEffect(() => {
        if (results.length <= 0) { return ; }

        // clear all markers first
        const clearAllMarkers = () => {
            const markers = document.querySelectorAll('.marker');
            markers.forEach(m => m.remove());
        };
        clearAllMarkers();
        
        // create nearby stops markers
        for (const station of results) {
            const position = [station.StationPosition.PositionLon, station.StationPosition.PositionLat];
            const text = `${station.StationName} ${station.Bearing}`;
            createMarker('marker', position, text);
        }
    }, [results]);


    return (
        <>
            <Header />
            <section className="nearby">
                <button className='btn-getlocation' onClick={e => getLocation(e)} title="點我獲取座標">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                </button>

                { location.lon !== null &&
                    <>
                        <div ref={mapContainer} style={{ height : '350px' }}></div>
                        
                        <section>
                            <ul className='result-list nearby-list'>
                                { results.map((stop, idx) => 
                                    <li key={idx}>
                                        <span>{stop.StationName} [{stop.Bearing}] </span> 
                                        <span>距離 {stop.Distance} 公尺 </span>
                                    </li>) 
                                }
                            </ul>

                            <small>距離僅供估算，非實際距離。</small>
                        </section>
                    </>
                }

                { (location.lon !== null && results.length === 0) ? <SearchNoResult /> : null }
            </section>
        </>
    );
};

export default NearBy;