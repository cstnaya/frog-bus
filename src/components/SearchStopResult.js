import React from "react";

const SearchStopResult = ({ results }) => {
    return (
        <ul>
            { results.map((bus, idx) => <li key={idx}>{bus.RouteName} {bus.EstimateTime} </li>) }
        </ul>
    );
};

export default SearchStopResult;