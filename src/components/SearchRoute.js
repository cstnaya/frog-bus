import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchRouteResult from "./SearchRouteResult";

const SearchRoute = ({ Placeholder,
                       handleFetchList,
                       handleFetchResult,
                       handleOptionLists,
                       handleSubmitToQuery,
                       handleCheckTermInBus
                    }) => {
    const [City, setCity] = useState('');
    const [RouteID, setRouteID] = useState('');

    const [result, setResult] = useState([[], []]);
    const [destination, setDestination] = useState(["", ""]);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const r = query.get('RouteID');
        const c = query.get('City');
        setCity(c);
        setRouteID(r);
    }, [])

    useEffect(() => {
        if (!City || !RouteID) { return ; }

        handleFetchResult(City, RouteID).then(response => {
            setResult(response.results);
            setDestination(response.destination);
        });
    }, [City, RouteID]);

    return (
        <>
            <SearchForm   Placeholder={Placeholder} 
                          handleFetchList={handleFetchList}
                          handleSubmitToQuery={handleSubmitToQuery} 
                          handleOptionLists={handleOptionLists} 
                          handleCheckTermInBus={handleCheckTermInBus} />
            <SearchRouteResult results={result} destination={destination} />
        </>
    );
};

export default SearchRoute;