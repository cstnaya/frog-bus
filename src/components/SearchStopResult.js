import React from "react";
import SearchNoResult from "./SearchNoResult";

const SearchStopResult = ({ results }) => {
    const query = new URLSearchParams(window.location.search).get('City');

    return (
        <>
            <section className='result-container'>
                <ul className='result-list stop-list'>
                    { results.map((bus, idx) => 
                        <li key={idx}>
                            <span>{bus.RouteName} </span>
                            <span> - {bus.EstimateTime} </span> 
                        </li>) 
                    }
                </ul>
            </section>
            { query && results.length === 0 ? <SearchNoResult /> : null }
        </>
    );
};

export default SearchStopResult;