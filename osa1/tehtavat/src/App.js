import axios from "axios";
import {useEffect, useState} from "react";

const App = () => {
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

export default App;

const Country = ({value}) => {

    const lang = Object.values(value.languages).map((lang, i) => <li key={`lang${i}`}>{lang}</li>)

    return( <div>
        <h1>{value.name.common}</h1>
        <p>{`capital ${ value.capital && value.capital.length > 0 ? value?.capital[0] : ''} `}</p>
        <p>{`area ${ value?.area}`}</p>
        <h3>language</h3>
        <ul>
            {lang}
        </ul>
        <div>
          <img src={value.flags.png} alt="alternatetext" />
        </div>
    </div>)
}
