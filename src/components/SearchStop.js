import React, { useState, useEffect } from "react";
import { getEstimateTime, REFRESH_TIME } from "../widgets/widgets";
import SearchForm from "./SearchForm";
import SearchStopResult from "./SearchStopResult";

const EstimatedTimeOfArrival = (data) => {
    if (!data.EstimateTime) return "尚未發車";
    if (data.EstimateTime < 2) return "即將進站";
    return `還有 ${getEstimateTime(data.EstimateTime, data.SrcTransTime)} 分鐘進站`;
};

const SearchStop = ({ Placeholder, handleFetchList, handleOptionLists, handleCheckTermInBus, handleSubmitToQuery, handleFetchResult }) => {
    const [Result, SetResult] = useState([]);

    const OutputResult = (City, StationID) => {
        handleFetchResult(City, StationID).then(res => {
            const datas = res.data;
            
            if (datas.length > 0) {
                const buses = datas.map(data => ({ RouteName: data.RouteName.Zh_tw, 
                                                   EstimateTime: EstimatedTimeOfArrival(data) }) );
                SetResult(buses);
            }  else {
                SetResult([]);
            }
        });
    }; 

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const C = query.get('City');
        const S = query.get('StationID');

        OutputResult(C, S);

        const timer = setInterval(() => {
            OutputResult(C, S);
        }, REFRESH_TIME);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <SearchForm   Placeholder={Placeholder} 
                          handleFetchList={handleFetchList} 
                          handleOptionLists={handleOptionLists} 
                          handleCheckTermInBus={handleCheckTermInBus} 
                          handleSubmitToQuery={handleSubmitToQuery} />
            <SearchStopResult  results={Result} />
        </>
    );
};

export default SearchStop;