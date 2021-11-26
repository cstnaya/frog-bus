import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const SearchResultMap = ({ center, locations, }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

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
            center: [center.lon, center.lat],
            sprite: "mapbox://sprites/mapbox/streets-v9",
            zoom: 15,
        });

    };

    const setupCenter = () => {
        // clear last position node
        const center = document.querySelector('.nowPosition');
        if (center) { center.remove(); }

        // create user's position node
        createMarker('nowPosition', [center.lon, center.lat], '現在位置');
    };

    const setupMarkers = () => {
        const clearAllMarkers = () => {
            const markers = document.querySelectorAll('.marker');
            markers.forEach(m => m.remove());
        };
        clearAllMarkers();

        for (const pos of locations) {
            const position = [pos.StationPosition.lon, pos.StationPosition.lat];
            const text = `${pos.StationName} ${pos.Bearing}`;
            createMarker('marker', position, text);
        }
    };

    useEffect(() => {
        if (center.lon === null || center.lat === null) { return ; }

        setupMap();
    }, [center]);

    return (
        <div ref={mapContainer} style={{ height : '350px' }}></div>
    );
};

export default SearchResultMap;