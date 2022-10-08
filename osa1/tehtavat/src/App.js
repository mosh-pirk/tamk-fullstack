import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const handleAddPerson = (event) => {
        event.preventDefault()
        const isFound = persons.find(person => person.name === newName)
        if (isFound) {
            window.alert(`${newName} is already added to phonebook`)
            return
        }
        const person = {
            name: newName
        }
        if (newName.length > 1) setPersons(persons.concat(person))
        setNewName('')
    }

    const handlePerson = (e) => {
        setNewName(e.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={handlePerson}/>
                </div>
                <div>
                    <button type="submit" onClick={handleAddPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person, i) => <p key={i}>{person.name}</p>)}
            </div>
        </div>
    )

}

export default App;
