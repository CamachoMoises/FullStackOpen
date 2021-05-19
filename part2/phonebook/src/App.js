import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [fillterName, setFilterName] = useState("");
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const personsToShow = fillterName === "" ? persons : persons.filter((person) => person.name.toLowerCase().includes(fillterName.toLowerCase()));
  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };
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
      setNewNumber("");
    } else window.alert(`${newName} is already addded to Phonebook `);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with <input value={fillterName} onChange={handleFilterChange} />
      </div>
      <h1> add a new </h1>
      <form onSubmit={AddPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            Name:{person.name}, Number:{person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
