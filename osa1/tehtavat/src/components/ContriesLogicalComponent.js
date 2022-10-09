import Country from "./Country";
import Countries from "./Countries";


const ContriesLogicalComponent = ({countries, filter}) => {
    const warningText = 'Too many matches, specify another filter'
    const noMatch = 'No countries matches'

    const componentsLogic = () => {
        if (countries.length === 1 ) {
            return <Country value={countries[0]} />
        } else if (countries.length > 10 && filter.length > 0) {
            return <p>{warningText}</p>
        } else if (countries.length < 10 && filter.length > 0 && countries.length !== 0) {
            return <Countries countries={countries} />
        } else
            return <p>{noMatch}</p>
    }


    return componentsLogic()
}

export default ContriesLogicalComponent;