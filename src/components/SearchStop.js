import React, { useState, useEffect } from "react";
import { getEstimateTime } from "../widgets/widgets";
import SearchForm from "./SearchForm";
import SearchStopResult from "./SearchStopResult";

const SearchStop = ({ Placeholder, handleFetchList, handleOptionLists, handleCheckTermInBus, handleSubmitToQuery, handleFetchResult }) => {
    const [City, setCity] = useState('');
    const [StationID, setStationID] = useState('');

    const [Result, SetResult] = useState([]);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const C = query.get('City');
        const S = query.get('StationID');

        setCity(C);
        setStationID(S);
    }, []);

    useEffect(() => {
        if (!City || !StationID) { return ; }

        handleFetchResult(City, StationID).then(res => {
            const datas = res.data;
            
            if (datas.length > 0) {
                const buses = datas.map(data => ({ RouteName: data.RouteName.Zh_tw, 
                                                   EstimateTime: data.EstimateTime ? `還有 ${getEstimateTime(data.EstimateTime, data.SrcTransTime)} 分鐘進站` : '尚未發車' }) );
                SetResult(buses);
            }  else {
                SetResult([]);
            }
        });
    }, [City, StationID]);

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