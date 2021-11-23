import React, { useState, useCallback  } from "react";
import { cities, debounce } from "../widgets/widgets";

const SearchForm = ({ Placeholder, handleFetchList, handleSubmitToQuery }) => {
    const cities_options = Object.keys(cities).map((city) => 
                                <option value={cities[city]} key={cities[city]}>{city}</option>);

    const [City, setCity] = useState('');
    const [term, setTerm]   = useState('');
    const [buses, setBuses] = useState([]);

    const fetchBus = async (City, newTerm) => {
        let newBuses = [];

        if (newTerm !== "" && newTerm !== null) {
            newBuses = await handleFetchList(City, newTerm);
        }

        setBuses(newBuses);
    }

    const debouncedFetchBus = useCallback(debounce((City, term) => fetchBus(City, term)), []); 

    const processChange = e => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        debouncedFetchBus(City, newTerm);
    };

    const checkValInList = e => {
        if (buses.filter(bus => bus.RouteName === term).length > 0) {
            const form = document.querySelector('#form');

            handleSubmitToQuery(form, '12345');
            
            form.submit();
        }
        e.preventDefault();
    }

    const handleSelectChange = (e) => {
        setCity(e.target.value);
        setTerm('');
        setBuses([]);
    }

    return (
        <form method="get" onSubmit={checkValInList} id='form'>
            <select value={City} 
                    onChange={handleSelectChange} 
                    required 
            >
                <option disabled value="">{Placeholder.select}</option>
                { cities_options }
            </select>
            
            <input  list='list-buses' 
                    autoComplete="off"
                    placeholder={Placeholder.input}
                    value={term}
                    onChange={processChange} 
                    hidden={!City} 
                    required />

            <datalist id="list-buses">
                {buses.map(function(bus, index) {
                    return <option value={bus.RouteName}  data-routeid={bus.RouteID} key={index} />
                })}
            </datalist>
            
            <button type="submit">submit</button>
        </form>
    );
};

export default SearchForm;