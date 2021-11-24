import React, { useState } from "react";

const SearchRouteResult = ({ results, destination }) => {
    const [nowDirection, setDirection] = useState(0);
    
    return (
        <section>
            { results[0].length > 0 && <button onClick={e => setDirection(0)}>往 {destination[0]}</button> }
            { results[1].length > 0 && <button onClick={e => setDirection(1)}>往 {destination[1]}</button> }
            
            <ol>
                {   
                    results[nowDirection].map((stop,idx) => {
                        return <li key={idx}>{stop.StopName.Zh_tw} {stop.EstimateTime ? stop.EstimateTime : '尚未發車' }</li>
                    })
                }
            </ol>
        </section>
    );
};

export default SearchRouteResult;