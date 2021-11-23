import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const SearchRoute = ({ Placeholder, handleFetchResult, handleFetchList, handleSubmitToQuery }) => {
    const [City, setCity] = useState('');
    const [RouteID, setRouteID] = useState('');
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const r = query.get('RouteID');
        const c = query.get('City');
        setCity(c);
        setRouteID(r);
    }, [])

    useEffect(() => {
        if (!City || !RouteID) { return ; }

        const results = handleFetchResult(City, RouteID);
        setResult(results);
    }, [City, RouteID]);

    return (
        <>
            <SearchForm   Placeholder={Placeholder} 
                          handleFetchList={handleFetchList}
                          handleSubmitToQuery={handleSubmitToQuery} />
            <SearchResult results={result} />
        </>
    );
};

export default SearchRoute;