import axios from "axios";
import ContriesLogicalComponent from "./components/ContriesLogicalComponent";
import {useEffect, useState} from "react";

const url = 'https://restcountries.com/v3.1/all'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get(url).then(data => setCountries(data.data))
    }, [])

    const handelFilter = (e) => setFilter(e.target.value)
    const smallString = (str) => str.toLowerCase()


    const filteredCounties = countries
        .filter(country => smallString(country.name.common)
            .includes(smallString(filter)))

    return (
        <>
            <input
                type={'text'}
                value={filter}
                onChange={handelFilter}/>
            <ContriesLogicalComponent
                countries={filteredCounties}
                filter={filter}/>
        </>
    )
}

export default App;
