import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const Search = ({ Placeholder, handleFetchResult, handleFetchList }) => {
    const [city, setCity] = useState('');
    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const k = query.get('keyword');
        const c = query.get('city');
        setKeyword(k);
        setCity(c);
    }, [])

    useEffect(() => {
        if (!city || !keyword) { return ; }

        const results = handleFetchResult(city, keyword);
        setResult(results);
    }, [city, keyword]);

    return (
        <>
            <SearchForm   Placeholder={Placeholder} handleFetchList={handleFetchList} />
            <SearchResult results={result} />
        </>
    );
};

export default Search;