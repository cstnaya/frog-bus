import React from "react";
import Header from "../components/Header";
import SearchRoute from "../components/SearchRoute";
import { searchHolders } from "../widgets/widgets";
import api from "../apis/api";

const Routes = () => {

    const fetchResults = async (City, RouteID) => {
        console.log(City, RouteID);

        const query = `EstimatedTimeOfArrival/Streaming/City/${City}?$filter=RouteID eq '${RouteID}'&$orderby=StopSequence&$top=200&$format=JSON`;
        const results = await api.get(query);

        return results;
    };

    const fetchBuses = async (City, RouteName) => {
        const query = `StopOfRoute/City/${City}/${RouteName}?$format=JSON`;
        const responses = await api.get(query);
        
        const s = new Set(responses.data.map(item => 
                            (JSON.stringify({RouteID: item.RouteID, RouteName: item.RouteName.Zh_tw}))
                        ));
        const fs = [...s].map(item => JSON.parse(item))

        return fs;
    };

    const handleSubmitToQuery = (form, RouteID) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'RouteID');
        input.setAttribute('value', RouteID);
        form.appendChild(input);
    };

    return (
        <>
            <Header />
            <SearchRoute Placeholder={{ "select" : searchHolders.select, "input" : searchHolders.routes }}
                         handleFetchList={fetchBuses} 
                         handleFetchResult={fetchResults} 
                         handleSubmitToQuery={handleSubmitToQuery} />
        </>
    );
};

export default Routes;