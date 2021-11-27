import React, { useEffect, useState } from "react";
import SearchNoResult from "./SearchNoResult";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const SearchRouteResult = ({ results, destination, positions, routes }) => {
    const [nowDirection, setDirection] = useState(0);
    const [init, setInit] = useState(true);

    const query = new URLSearchParams(window.location.search).get('City');

    const mapContainer = React.createRef();
    const map = React.createRef();

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

    const setupMap = (center) => {
        if (map.current) return ;

        // create map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/tn-o/ckweg9qi6094515mv8bt3mdil',
            center: [center.StopPosition.lon, center.StopPosition.lat],
            sprite: "mapbox://sprites/mapbox/streets-v9",
            zoom: 13,
        });    
    };

    const setupRoute = () => {
        // clear past route
        const pastRoute = document.querySelector('#routepath');
        if (pastRoute) { pastRoute.remove(); }

        // draw bus route
        const route = routes[nowDirection].map(stop => [stop.StopPosition.lon, stop.StopPosition.lat]);
        const routeSource = {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': route 
                }
            }
        };
        const layerProperty = {
            'id': 'routepath',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#77B441',
                'line-width': 7
            }
        };
        map.current.on('load', () => {
            map.current.addSource('route', routeSource);
            map.current.addLayer(layerProperty);
            map.current.fitBounds([
                route[0], // southwestern corner of the bounds
                route[ route.length - 1 ] // northeastern corner of the bounds
            ]);
        });
    };

    const setupAllMarkers = () => {
        // clear all markers first
        const clearAllMarkers = () => {
            const markers = document.querySelectorAll('.busMarker');
            markers.forEach(m => m.remove());
        };
        clearAllMarkers();

        // create nearby stops markers
        for (const station of positions[nowDirection]) {
            const position = [station.BusPosition.lon, station.BusPosition.lat];
            const text = `${station.PlateNumb}`;
            createMarker('busMarker', position, text);
        }
    };

    useEffect(() => {
        let newInitState = init;

        if (routes[0].length > 0 || routes[1].length > 0) { 
            newInitState = false;
            setInit(newInitState);
        }

        if (!newInitState && results[0].length > 0 && results[1].length > 0) {
            setupMap(routes[0][0])
            setupRoute();
            setupAllMarkers();
        }
    }, [positions, nowDirection]);

    const handleButtonOnClick = (dir) => {
        const btns = document.querySelectorAll('.btn-direction');
        btns.forEach(btn => { btn.classList.remove('btn-dir-active'); })

        document.querySelector(`.btn-dir-${dir}`).classList.add('btn-dir-active');
        
        setDirection(dir);
    }

    return (
        <>
            <section className='result-container'>
                <div className='btns-list'>
                    { results[0].length > 0 &&  <button onClick={e => handleButtonOnClick(0)} className='btn-direction btn-dir-0 btn-dir-active'>
                                                    往 {destination[0]}
                                                </button> 
                    }
                    { results[1].length > 0 &&  <button onClick={e => handleButtonOnClick(1)} className='btn-direction btn-dir-1'>
                                                    往 {destination[1]}
                                                </button> 
                    }
                </div>
                <ol className='result-list routes-list'>
                    {   
                        results[nowDirection].map((stop,idx) => {
                            return  <li key={idx}> 
                                        <span>{stop.EstimateTime}</span>
                                        <span>{stop.StopName.Zh_tw}</span>
                                    </li>
                        })
                    }
                </ol>
                { results[0].length > 0 && results[1].length > 0 ?
                    <div ref={mapContainer} style={{ height : '350px' }} className="mapContainer"></div> : null
                }
            </section>
            { query && results[0].length === 0 && results[1].length === 0 ? 
                <section style={{ padding: '0 5vh' }} ><SearchNoResult /></section>
                : null 
            }
        </>
    );
};

export default SearchRouteResult;