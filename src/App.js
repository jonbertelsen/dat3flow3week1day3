import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'react-uuid'
import FormDemo from './FormDemo'
import ReservationForm from './FormDemoMultiple'
import NewPerson from './NewPerson'
import PersonList from './PersonList'


function App()
{
  const initialData = [
    { id: uuid(), name: 'Jønke' },
    { id: uuid(), name: 'Blondie' },
    { id: uuid(), name: 'Medina' }
  ]
  const emptyPerson = { id: '', name: '' }
  const [persons, setPersons] = useState(initialData)
  const [newPerson, setNewPerson] = useState(emptyPerson);
  const [newPersonName, setNewPersonName] = useState('Hans')

  const transferPerson = (nameFromReservationForm) =>
  {
    setNewPersonName(nameFromReservationForm)
  }

  const addEditPerson = person =>
  {
    if (person.id === '')
    { // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    }
    else
    {
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.name = person.name;
      console.log(personToEdit.name)
      setNewPerson({ ...personToEdit })
    }
    setPersons([...persons])
    setNewPerson(emptyPerson)
  };

  const editPerson = person =>
  {
    let personToEdit = persons.find(p => p.id === person.id);
    console.log({ ...personToEdit })
    setNewPerson({ ...personToEdit })
  };


  const deletePerson = (id) =>
  {
    let personToDelete = persons.find(p => p.id === id);
    console.log(personToDelete)
    let personIndex = persons.indexOf(personToDelete)
    if (personIndex > -1)
    {
      persons.splice(personIndex, 1)
    }
    setPersons([...persons])
  }

  return (
    <div className="container outer">
      <h1>Form demo</h1>
      <FormDemo newName={newPersonName} />
      <h2>Reservationform</h2>
      <ReservationForm
        transferPerson={transferPerson}
      />
      <h2>Lift State demo</h2>
      <p>Total persons: {persons.length}</p>
      <div className="row">

        <div className="col-6">
          <PersonList
            persons={persons}
            deletePerson={deletePerson}
            editPerson={editPerson}
          />
        </div>
        <div className="col-6">
          <NewPerson
            addEditPerson={addEditPerson}
            person={newPerson} />
        </div>
      </div>

    </div>
  );
}

export default App;
