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

    const filteredPersons = persons
        .filter(person => person.name
            .toLowerCase()
            .includes(filter.toLowerCase()))
        .map((person, i) => <p key={i}>{
            `${person.name} ${person.number}`
        }</p>)


    return (
        <div>
            <h2>Phonebook</h2>
            <Filterd value={filter} onChange={handelFilter}/>
            <h3>add new</h3>
            <PersonForm
                name={newName}
                changeName={handlePerson}
                number={newNumber}
                changeNumber={handlePhone}
                addPerson={handleAddPerson}/>
            <h3>Numbers</h3>
            <Persons persons={filteredPersons}/>
        </div>
    )

}

export default App;

const Filterd = (props) => {
    return <div>
        filter shown with <input value={props.value} onChange={props.onChange}/>
    </div>;
}

const PersonForm = ({name, number, changeName, changeNumber, addPerson}) => {
    return <form>
        <div>
            name: <input value={name} onChange={changeName}/>
        </div>
        <div>
            number: <input value={number} onChange={changeNumber}/>
        </div>
        <div>
            <button type="submit" onClick={addPerson}>add</button>
        </div>
    </form>;
}

const Persons = ({persons}) => <div>{persons}</div>



