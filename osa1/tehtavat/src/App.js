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
            <Teksti text={'statics'} bold={true}/>
            <div><span>good </span>{good}</div>
            <div><span>neutral </span>{neutral}</div>
            <div><span>bad </span>{bad}</div>

        </div>
    )
}


export default App;

const Teksti = ({text, bold}) => {
    if (bold) return <h1>{text}</h1>
    else return <span>{text}</span>
}

const Button = ({name, handleClick}) => {
    return <button onClick={() => handleClick()}> {name} </button>
}