import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleAddPerson = (event) => {
        event.preventDefault()
        const isFound = persons.find(person => person.name === newName)
        if (isFound) {
            window.alert(`${newName} is already added to phonebook`)
            return
        }
        const person = {
            name: newName,
            number: newNumber
        }
        if (newName.length > 1) setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
    }

    const handlePerson = (e) => {
        setNewName(e.target.value)
    }

    const handlePhone = (e) => {
        setNewNumber(e.target.value)
    }
    const handelFilter = (e) => {
        setFilter(e.target.value)
        return persons.filter(person => person.name.includes(filter))
    }

    const filteredPersons = persons.filter(person => person.name.includes(filter))
        .map((person, i) => <p key={i}>{
            `${person.name} ${person.number}`
        }</p>)


    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={filter} onChange={handelFilter}/>
            </div>
            <h2>add new</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={handlePerson}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handlePhone}/>
                </div>
                <div>
                    <button type="submit" onClick={handleAddPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>{filteredPersons}</div>
        </div>
    )

}

export default App;
