const Teksti = ({text, tyyppi}) => {
    if (tyyppi === 'bold') return <h1>{text}</h1>
    else if (tyyppi === 'bold_3') return <h3>{text}</h3>
    else if (tyyppi === 'newLine') return <div key={text + tyyppi}>{text}</div>
    else return <span key={text + tyyppi}>{text}</span>
}

export default Teksti