import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import personService from "./service/person";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [fillterName, setFilterName] = useState("");
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const personsToShow = fillterName === "" ? persons : persons.filter((person) => person.name.toLowerCase().includes(fillterName.toLowerCase()));
  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };
  useEffect(() => {
    personService.getAll().then((initialsPersons) => {
      setPersons(initialsPersons);
    });
  }, []);
  const AddPerson = (event) => {
    event.preventDefault();
    const names = persons.map((person) => person.name);
    const repeated = names.indexOf(newName);
    if (repeated === -1) {
      const personObjet = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObjet).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    } else window.alert(`${newName} is already addded to Phonebook `);
    setNewName("");
    setNewNumber("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter fillterName={fillterName} handleFilterChange={handleFilterChange} />
      <h1> add a new </h1>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} AddPerson={AddPerson} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
