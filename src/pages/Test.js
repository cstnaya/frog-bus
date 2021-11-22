import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Test = () => {
    const [keyword, setKeyword] = useState('');
    
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const k = query.get('keyword');
        setKeyword(k);
    }, [])

    return (
        <>
            <Header />
            <form method="get" >
                <input name="keyword" />
                <button type="submit">submit</button>
                hello, {keyword}!
            </form>
        </>
    );
};

export default Test;