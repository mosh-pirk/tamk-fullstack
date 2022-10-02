import {useState} from "react";

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Teksti text={'give feedback'} bold={true}/>
            <Button name={'good'} handleClick={() => setGood(good + 1)}/>
            <Button name={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
            <Button name={'bad'} handleClick={() => setBad(bad + 1)}/>
            <Teksti text={'Statistics'} tyyppi={'bold'}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}


export default App;

const Statistics = ({good, neutral, bad}) => {
    const all = () => good + neutral + bad
    const average = () => (good - bad) / all()
    const positive = () => (good / all()) * 100

    return all() === 0
        ? <Teksti text={'No feedback given'} tyyppi={'newLine'}/>
        : <div>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <Teksti text={'all ' + all()} tyyppi={'newLine'}/>
            <Teksti text={'average ' + average()} tyyppi={'newLine'}/>
            <Teksti text={'positive ' + positive() + ' %'} tyyppi={'newLine'}/>
        </div>

}

const Teksti = ({text, tyyppi}) => {
    if (tyyppi === 'bold') return <h1>{text}</h1>
    else if (tyyppi === 'newLine') return <div>{text}</div>
    else return <span>{text}</span>
}

const Button = ({name, handleClick}) => <button onClick={() => handleClick()}> {name} </button>


const StatisticLine = ({text, value}) =>
    <Teksti text={text + ' ' + value} tyyppi={'newLine'} />