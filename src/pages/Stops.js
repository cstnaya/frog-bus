import React from "react";
import Header from "../components/Header";
import api from "../apis/api";
import SearchStop from "../components/SearchStop";
import { searchHolders, Bearings, N1Cities } from "../widgets/widgets";
import '../css/stop.css';

const Stops = () => {

    const fetchStation = async (City, term) => {
        const query = `Station/City/${City}?$filter=contains(StationName/Zh_tw, '${term}')&$top=20&$format=JSON`;
        const responses = await api.get(query);

        const s = new Set(responses.data.map(item => 
                            (JSON.stringify({ StationID: item.StationID, 
                                              StationName: item.StationName.Zh_tw, 
                                              Bearing: Bearings[item.Bearing],
                                              StationAddress: item.StationAddress
                                             })) 
                        ));
        const fs = [...s].map(item => JSON.parse(item));

        return fs;
    };

    const handleOptionLists = (arr) => {
        return arr.map((bus, idx) => {
            if (bus.Bearing) {
                return <option value={`${bus.StationName} [往 ${bus.Bearing}]`}  data-routeid={bus.StationID} key={idx} />;  
            }  else {
                return <option value={`${bus.StationName} [${bus.StationAddress}]`}  data-routeid={bus.StationID} key={idx} />;  
            }
        });
    }

    const findTermInStations = (stations, term) => {
        const newTerm = term.split('[')[0].trim();
        const station = stations.filter(item => item.StationName === newTerm);
        
        if (station.length > 0) {
            return station[0].StationID;
        }

        return false;
    };

    const handleSubmitToQuery = (form, StationID) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'StationID');
        input.setAttribute('value', StationID);
        form.appendChild(input);
    };

    const fetchResults = async (City, StationID) => {
        // N1: {City} should be in N1Cities array. 
        if (N1Cities.indexOf(City) > -1) {
            // get stops:
            const query = `Station/City/${City}?$filter=StationID eq '${StationID}'&$format=JSON`;
            const responses = await api.get(query);

            if (!responses.data) { return { data: [] }; }

            const Stops = responses.data[0].Stops;
            const s = new Set(Stops.map(item => {
                        return JSON.stringify({ StopID: item.StopID, RouteID: item.RouteID });
                    }));

            const stops = [...s].map(item => JSON.parse(item));

            // get waiting time:
            let qq = `EstimatedTimeOfArrival/Streaming/City/${City}?$format=JSON`;
            stops.forEach((stop, idx) => {
                const rid = stop.RouteID;
                const sid = stop.StopID;
                
                if (idx > 0) {
                    qq += `or (RouteID eq '${rid}' and StopID eq '${sid}') `;
                }  else {
                    qq += `&$filter=(RouteID eq '${rid}' and StopID eq '${sid}') `;
                }
            });

            const waiting = await api.get(qq);

            return waiting;
        }  else {
            return { data: [] };
        }
    };

    return (
        <>
            <Header />
            <section className="stop">
                <SearchStop Placeholder={{ "select" : searchHolders.select, "input" : searchHolders.stops }}
                            handleFetchList={fetchStation}
                            handleOptionLists={handleOptionLists}
                            handleCheckTermInBus={findTermInStations}
                            handleSubmitToQuery={handleSubmitToQuery}
                            handleFetchResult={fetchResults}
                />
            </section>
        </>
    );
};

export default Stops;