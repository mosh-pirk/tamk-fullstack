import axios from "axios";

const personUrl = 'http://localhost:3001/persons'

const allPersons = () => axios.get(personUrl).then(data => data.data)
const savePerson = (person) => axios.post(personUrl, person).then(data => data.data)
const deletePerson = (id) => axios.delete(personUrl+ '/' + id)
const editPerson = (id, data) => axios.put(personUrl+ '/' + id, data).then(data => data.data)

export default {allPersons, savePerson, deletePerson, editPerson}