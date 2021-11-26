import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchRouteResult from "./SearchRouteResult";
import { REFRESH_TIME } from "../widgets/widgets";

const SearchRoute = ({ Placeholder,
                       handleFetchList,
                       handleFetchResult,
                       handleOptionLists,
                       handleSubmitToQuery,
                       handleCheckTermInBus,
                       handleFetchMapPositions,
                       handleFetchRouteStops,
                    }) => {
    const [result, setResult] = useState([[], []]);
    const [destination, setDestination] = useState(["", ""]);
    const [positions, setPositions] = useState([[], []]);
    const [routes, setRoutes] = useState([[], []]);

    const OutputAndDrawMap = (City, RouteID) => {
        handleFetchResult(City, RouteID).then(response => {
            setResult(response.results);
            setDestination(response.destination);
        });

        handleFetchRouteStops(City, RouteID).then(routes => {
            setRoutes(routes);
        });

        handleFetchMapPositions(City, RouteID).then(response => {
            setPositions(response);
        });    
    };

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const r = query.get('RouteID');
        const c = query.get('City');

        OutputAndDrawMap(c, r);

        const timer = setInterval(() => {
            OutputAndDrawMap(c, r);
        }, REFRESH_TIME);

        return () => clearInterval(timer);
    }, [])

    return (
        <section className='routes'>
            <SearchForm   Placeholder={Placeholder} 
                          handleFetchList={handleFetchList}
                          handleSubmitToQuery={handleSubmitToQuery} 
                          handleOptionLists={handleOptionLists} 
                          handleCheckTermInBus={handleCheckTermInBus} />
            <SearchRouteResult results={result} 
                               destination={destination} 
                               positions={positions} 
                               routes={routes} />
        </section>
    );
};

export default SearchRoute;