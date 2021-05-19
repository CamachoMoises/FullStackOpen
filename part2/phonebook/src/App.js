import React, { useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";

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
    } else window.alert(`${newName} is already addded to Phonebook `);
    setNewName("");
    setNewNumber("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      fillterName={fillterName} 
      handleFilterChange={handleFilterChange}/>
      <h1> add a new </h1>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        AddPerson={AddPerson}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
