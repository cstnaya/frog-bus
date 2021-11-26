import React from "react";
import noresult from '../imgs/noresult.svg';
import '../css/noresult.css';

const SearchNoResult = () => {
    return (
        <div className='noresult'>
            <img src={noresult} width="300" alt="no result." />
            <p>沒有結果。</p>
            <small>部分縣市無法提供結果，請先確認您搜索的縣市是否在指定範圍內。</small>
        </div>
    );
};

export default SearchNoResult;