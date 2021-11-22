import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { searchHolders } from "../widgets/widgets";

const Routes = () => {

    const fetchResults = (city, keyword) => {
        // api
        console.log(city, keyword);

        const results = [{id: 0, name: 'test'}];

        return results;
    };

    const fetchBuses = (newTerm) => {
        // api

        const buses = [{id: 0, name: "225"}];

        return buses;
    };

    return (
        <>
            <Header />
            <Search Placeholder={{ "select" : searchHolders.select, "input" : searchHolders.routes }} 
                    handleFetchResult={fetchResults} 
                    handleFetchList={fetchBuses} />
        </>
    );
};

export default Routes;