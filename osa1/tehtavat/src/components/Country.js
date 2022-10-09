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

export default Country;