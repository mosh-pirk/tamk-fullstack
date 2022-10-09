
import axios from "axios";
import Country from "./Country";
import {useEffect, useState} from "react";

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const warningText = 'Too many matches, specify another filter'
    const noMatch = 'No counties maches'

    const hook = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(data => setCountries(data.data))
    }

    useEffect(hook, [])

    const handelFilter = (e) => {
        setFilter(e.target.value)
    }

    const filteredCounties = countries
        .filter(country => country.name.common
            .toLowerCase()
            .includes(filter.toLowerCase()))

    const componentsLogic = () => {
        if (filteredCounties.length === 1 ) {
            return <Country value={filteredCounties[0]} />
        } else if (filteredCounties.length > 10) {
            return <p>{warningText}</p>
        } else if (filteredCounties.length < 10) {
            return filteredCounties.map((country, i) => <p key={i}>{country.name.common}</p>)
        } else return <p>{noMatch}</p>
    }

    return (
        <div>
            <div>
                <input type={'text'} value={filter} onChange={handelFilter}/>
            </div>
            {componentsLogic()}
        </div>
    )
}

export default Countries