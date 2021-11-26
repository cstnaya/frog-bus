import React from "react";
import Header from "../components/Header";
import SearchRoute from "../components/SearchRoute";
import { searchHolders, N1Cities, getEstimateTime } from "../widgets/widgets";
import api from "../apis/api";
import '../css/routes.css';

const Routes = () => {
    const fetchPositions = async (City, RouteID) => {
        let positions = [[], []];

        // A1: {City} should be in N1Cities array too.
        if (N1Cities.indexOf(City) > -1) {
            const query = `RealTimeByFrequency/Streaming/City/${City}?$filter=RouteID eq '${RouteID}'&$top=10&$format=JSON`;
            const result = await api.get(query);

            if (!result.data) { return positions; }

            const s = result.data.map(data => ({PlateNumb: data.PlateNumb, 
                                                Direction: data.Direction, 
                                                BusPosition: { lon : data.BusPosition.PositionLon, lat : data.BusPosition.PositionLat } }) );
            const d0 = s.filter(data => data.Direction === 0);
            const d1 = s.filter(data => data.Direction === 1);

            positions = [d0, d1];
        }

        return positions;
    };

    const fetchStationsForMap = async (City, RouteID) => {
        let routes = [[], []];
        
        // A1: {City} should be in N1Cities array too.
        if (N1Cities.indexOf(City) > -1) {
            const query = `StopOfRoute/City/${City}?$filter=RouteID eq '${RouteID}'&$format=JSON`;
            const response = await api.get(query);

            if (!response.data) { return routes; }

            const R0 = response.data.filter(route => route.Direction === 0 )[0];
            const R1 = response.data.filter(route => route.Direction === 1 )[0];

            let s0 = [], s1 = [];

            if (R0) {
                s0 = R0.Stops.map(stop => ({ StopName: stop.StopName.Zh_tw, 
                                              StopPosition: {lon: stop.StopPosition.PositionLon, lat: stop.StopPosition.PositionLat} }) );
            }
            if (R1) { 
                s1 = R1.Stops.map(stop => ({ StopName: stop.StopName.Zh_tw, 
                                               StopPosition: {lon: stop.StopPosition.PositionLon, lat: stop.StopPosition.PositionLat} }) );
            }
            routes = [s0, s1];
        }

        return routes;
    };

    const fetchResults = async (City, RouteID) => {
        let results = [[], []];
        let destination = ["", ""];
        
        // N1: {City} should be in N1Cities array. 
        if (N1Cities.indexOf(City) > -1) {
            const query = `EstimatedTimeOfArrival/Streaming/City/${City}?$filter=RouteID eq '${RouteID}'&$orderby=StopSequence&$top=200&$format=JSON`;
            results = await api.get(query);

            // N1 data will return duplicated datas, so we need to remove them.
            const removeDuplicate = function(arr) {
                arr.forEach((item, idx) => {
                    const next = arr[ (idx+1) % arr.length ];
                    if (next.id === item.id) {
                        arr.splice(idx+1, 1);
                    }
                })                
                return arr;
            };

            // subtract time error when transferring data.
            const getPreciseTime = function(arr) {
                const EstimateTimeOfArrival = (item) => {
                    if (!item.EstimateTime) { return '尚未發車'; }

                    const time = getEstimateTime(item.EstimateTime, item.SrcTransTime);
                    
                    if (time <= 2) { return '即將到站'; }
                    return `${time} mins`;
                };

                return arr.map(item => {    
                    return ({ ...item, EstimateTime: EstimateTimeOfArrival(item) });
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
                         handleFetchMapPositions={fetchPositions}
                         handleFetchRouteStops={fetchStationsForMap}
            />
        </>
    );
};

export default Routes;