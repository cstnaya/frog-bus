import React from "react";
import noresult from '../imgs/noresult.svg';

const SearchNoResult = () => {
    return (
        <div>
            <img src={noresult} width="300" alt="no result." />
            沒有結果。
        </div>
    );
};

export default SearchNoResult;