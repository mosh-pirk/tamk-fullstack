import Country from "./Country";
import Teksti from "./Teksti";
import {useState} from "react";

const Countries = ({countries}) => {
    const [country, setCountry] = useState(undefined)

    const handleShowCountry = (countryName) => {
        const selectedCountry = countries
            .filter(country => country.name.common === countryName)[0]
        setCountry(selectedCountry)
    }

    return (<div> {countries
        .map((country, i) => <div key={i}>
            <Teksti text={country.name.common}/>
            <button key={country.name.common + 'button' + i}
                    onClick={() => handleShowCountry(country.name.common)}>Show
            </button>
        </div>)}
        {
            country
            && <Country value={country}/>}

    </div>)
}

export default Countries