import React from "react";
import Header from "../components/Header";
import SearchRoute from "../components/SearchRoute";
import { searchHolders, N1Cities, getEstimateTime } from "../widgets/widgets";
import api from "../apis/api";

const Routes = () => {

    const fetchResults = async (City, RouteID) => {
        let results = [[], []];
        let destination = ["", ""];
        
        // N1: City should be in N1Cities array. 
        if (N1Cities.indexOf(City) > -1) {
            const query = `EstimatedTimeOfArrival/Streaming/City/${City}?$filter=RouteID eq '${RouteID}'&$orderby=StopSequence&$top=200&$format=JSON`;
            results = await api.get(query);

            const removeDuplicate = function(arr) {
                arr.forEach((item, idx) => {
                    const next = arr[ (idx+1) % arr.length ];
                    if (next.id === item.id) {
                        arr.splice(idx+1, 1);
                    }
                })                
                return arr;
            };

            const getPreciseTime = function(arr) {
                return arr.map(item => {    
                    return ({ ...item, EstimateTime: getEstimateTime(item.EstimateTime, item.SrcTransTime) });
                });
            };

            let d0 = [...results.data].filter(row => row.Direction === 0);
            d0 = removeDuplicate(d0);
            d0 = getPreciseTime(d0);
            
            let d1 = [...results.data].filter(row => row.Direction === 1);
            d1 = removeDuplicate(d1);
            d1 = getPreciseTime(d1);

            results = [d0, d1];

            const d0_dest = d0.length > 0 ? d0[d0.length - 1].StopName.Zh_tw : "";
            const d1_dest = d1.length > 0 ? d1[d1.length - 1].StopName.Zh_tw : "";
            
            destination = [d0_dest, d1_dest];
        }
        
        return { results: results, destination: destination };
    };

    const fetchBuses = async (City, RouteName) => {
        const query = `StopOfRoute/City/${City}/${RouteName}?$top=20&$format=JSON`;
        const responses = await api.get(query);
        
        const s = new Set(responses.data.map(item => 
                            (JSON.stringify({RouteID: item.RouteID, RouteName: item.RouteName.Zh_tw}))
                        ));
        const fs = [...s].map(item => JSON.parse(item));

        return fs;
    };

    const handleSubmitToQuery = (form, RouteID) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'RouteID');
        input.setAttribute('value', RouteID);
        form.appendChild(input);
    };

    const handleOptionLists = (arr) => {
        return arr.map((bus,index) => { 
            return <option value={bus.RouteName}  data-routeid={bus.RouteID} key={index} />;
        });
    };

    const findTermInBuses = (buses, term) => {
        const bus = buses.filter(bus => bus.RouteName === term);

        if (bus.length > 0) {
            return bus[0].RouteID;
        }

        return false;
    };

    return (
        <>
            <Header />
            <SearchRoute Placeholder={{ "select" : searchHolders.select, "input" : searchHolders.routes }}
                         handleFetchList={fetchBuses} 
                         handleOptionLists={handleOptionLists}
                         handleCheckTermInBus={findTermInBuses}
                         handleSubmitToQuery={handleSubmitToQuery} 
                         handleFetchResult={fetchResults} 
            />
        </>
    );
};

export default Routes;