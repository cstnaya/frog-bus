import React from "react";
import SearchNoResult from "./SearchNoResult";

const SearchStopResult = ({ results }) => {
    const query = new URLSearchParams(window.location.search).get('City');

    return (
        <section>
            <ul className='result-list stop-list'>
                { results.map((bus, idx) => 
                    <li key={idx}>
                        <span>{bus.RouteName} </span>
                        <span> - {bus.EstimateTime} </span> 
                    </li>) 
                }
            </ul>

            { query && results.length === 0 ? <SearchNoResult /> : null }
        </section>
    );
};

export default SearchStopResult;