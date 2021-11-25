import React from "react";
import SearchNoResult from "./SearchNoResult";

const SearchStopResult = ({ results }) => {
    const query = new URLSearchParams(window.location.search).get('City');

    return (
        <section>
            <ul>
                { results.map((bus, idx) => <li key={idx}>{bus.RouteName} {bus.EstimateTime} </li>) }
            </ul>
            { query && results.length === 0 ? <SearchNoResult /> : null }
        </section>
    );
};

export default SearchStopResult;