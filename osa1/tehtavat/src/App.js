import {useState} from "react";

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
    ]
    const anecdotesNew = anecdotes.map((x, i) => {
        return {id: i, text: x, vote: 0}
    })

    const [selected, setSelected] = useState(0)
    const [mostVoted, setMostVoted] = useState(0)
    const [anecdotesArray, setAnecdotesArray] = useState(anecdotesNew)

    const getRandomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const handleVotes = (key) => {
        const copy = [...anecdotesArray]
        copy[key].vote = copy[key].vote + 1
        setAnecdotesArray(copy)
        const mostVoteditem = anecdotesArray.reduce((pre, cur) => pre.vote > cur.vote ? pre : cur)
        setMostVoted(mostVoteditem.id)
    }


    return (
        <div>
            <Teksti text={'Anecdote of the day'} tyyppi={'bold'}/>
            <Teksti text={anecdotesArray[selected].text} tyyppi={'newLine'}/>
            <Teksti text={'has ' + anecdotesArray[selected].vote + ' votes '} tyyppi={'newLine'}/>
            <div>
                <Button name={'vote'} handleClick={() => handleVotes(selected)}/>
                <Button name={'nexanecdote'} handleClick={() => setSelected(getRandomNumberBetween(0, 7))}/>
            </div>
            <Teksti text={'Anecdote with most votes'} tyyppi={'bold'}/>
            <Teksti text={anecdotesArray[mostVoted].text} tyyppi={'newLine'}/>
            <Teksti text={'has ' + anecdotesArray[mostVoted].vote + ' votes '} tyyppi={'newLine'}/>

        </div>
    )
}


export default App;

const Button = ({name, handleClick}) => <button onClick={() => handleClick()}> {name} </button>

const Teksti = ({text, tyyppi}) => {
    if (tyyppi === 'bold') return <h1>{text}</h1>
    else if (tyyppi === 'newLine') return <div>{text}</div>
    else return <span>{text}</span>
}