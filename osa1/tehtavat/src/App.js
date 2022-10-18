import {useEffect, useState} from "react";
import personServer from "./servers/personServer";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const getPersons = () => {
        personServer.allPersons().then(persons => {
            setPersons(persons)
        })
    }
    const addPerson = (event) => {
        event.preventDefault()
        const xPersons = [...persons]
        const foundedPerson = xPersons.find(person => person.name === newName)
        if (foundedPerson) {
            window.alert(`${newName} is already added to phonebook, replace the old number with a new one`)
            foundedPerson.number = newNumber

            personServer.editPerson(foundedPerson.id, foundedPerson).then(() => {
                setPersons(xPersons)
            })
        } else {
            if (newName.length < 3) {
                window.alert('Add valid name')
                return
            }
            const person = {
                name: newName,
                number: newNumber
            }
            personServer.savePerson(person).then(data => {
                if (newName.length > 1) setPersons(persons.concat(data))
                setNewName('')
                setNewNumber('')
            })
        }
    }

    const deletePerson = (id) => {
        const xPersons = [...persons]
        const personToDelete = xPersons.find(person => person.id === id)
        if (window.confirm(`Delete ${personToDelete.name}`)) {
            personServer.deletePerson(id)
                .then(() => {
                    const filteredXpersons = xPersons.filter(person => id !== person.id)
                    setPersons(filteredXpersons)
                }).catch(err => window.alert(err))
        }
    }

    useEffect(getPersons, [])

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
        .filter(person => person.name && person.name
            .toLowerCase()
            .includes(filter.toLowerCase()))
        .map(person => <Person key={person.id} person={person} handleDelete={deletePerson}/>)


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
                addPerson={addPerson}/>
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

const Person = ({person, handleDelete}) =>
    <p key={person.id}>
        {`${person.name} ${person.number}`} {
        <button
            key={person.id + 'button'}
            onClick={() => handleDelete(person.id)}
        > delete </button>}</p>
