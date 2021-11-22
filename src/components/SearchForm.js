import React, { useState, useCallback  } from "react";
import { cities, debounce } from "../widgets/widgets";

const SearchForm = ({ Placeholder, handleFetchList }) => {
    const cities_options = Object.keys(cities).map((city) => 
                                <option value={cities[city]} key={cities[city]}>{city}</option>);

    const [term, setTerm]   = useState('');
    const [selected, setSelected] = useState('');
    const [buses, setBuses] = useState([]);

    const fetchBus = (newTerm) => {
        let newBuses = [];

        if (newTerm !== "" && newTerm !== null) {
            newBuses = handleFetchList(newTerm);
        }

        setBuses(newBuses);
    }

    const debouncedFetchBus = useCallback(debounce(term => fetchBus(term)), []); 

    const processChange = e => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        debouncedFetchBus(newTerm);
    };

    const checkValInList = e => {
        if (buses.filter(bus => bus.name === term).length > 0) {
            const form = document.querySelector('#form');
            form.submit();
        }
        e.preventDefault();
    }

    return (
        <form method="get" onSubmit={checkValInList} id='form'>
            <select name='city'  value={selected} onChange={e => setSelected(e.target.value)} required>
                <option disabled value="">{Placeholder.select}</option>

                { cities_options }
            </select>
            
            <input  name="keyword" list='list-buses' 
                    autoComplete="off" 
                    required onChange={processChange} 
                    placeholder={Placeholder.input} />

            <datalist id="list-buses">
                {buses.map(function(bus) {
                    return <option value={bus.name} key={bus.id} />
                })}
            </datalist>
            
            <button type="submit">submit</button>
        </form>
    );
};

export default SearchForm;