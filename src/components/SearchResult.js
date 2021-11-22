import React from "react";

const SearchResult = ({ results }) => {
    return (
        <section>
            { results.map(re => { 
                return <li key={re.id}>{re.name}</li>;
            }) }
        </section>
    );
};

export default SearchResult;