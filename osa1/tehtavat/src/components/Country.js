import Teksti from "./Teksti";
import Weather from "./Weather";

const Country = ({value}) => {

    const lang = Object.values(value.languages).map((lang, i) => <li key={`lang${i}`}>{lang}</li>)
    const capital = `capital ${value.capital && value.capital.length > 0 ? value?.capital[0] : ''} `
    const area = `area ${value?.area}`

    return (
        <div>
            <Teksti text={value.name.common} tyyppi={'bold'}/>
            <Teksti text={capital} tyyppi={'newLine'}/>
            <Teksti text={area} tyyppi={'newLine'}/>
            <Teksti text={'language'} tyyppi={'bold_3'}/>
            <ul>
                {lang}
            </ul>
            <div>
                <img src={value.flags.png} alt="alternatetext"/>
            </div>
            <Weather capital={value?.capital[0]} />

        </div>)
}

export default Country;