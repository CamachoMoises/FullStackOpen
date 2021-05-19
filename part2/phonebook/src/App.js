import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const AddPerson = (event) => {
    event.preventDefault();
    const names = persons.map((person) => person.name);
    const repeated = names.indexOf(newName);
    if (repeated === -1) {
      const personObjet = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObjet));
      setNewName("");
    } else window.alert(`${newName} is already addded to Numberbook `);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            Name:{person.name}, Number:{person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
