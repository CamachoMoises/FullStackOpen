import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import personService from "./service/person";

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
    let repeated = names.indexOf(newName);
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
    } else {
      repeated++
      if (window.confirm(`${newName} is already addded to Phonebook, replace the old number with a new one?`)) {
        const personObjet = {
          name: newName,
          number: newNumber,
        };
        personService.update(repeated, personObjet).then((returnedPerson) => {
          setPersons(persons.map((person) => (person.id !== repeated ? person : returnedPerson)));
        }).catch(error=>{
          alert(`the person was already delete from server`)
          setPersons(persons.filter(per=>per.id===repeated))
        });
        setNewNumber("");
      }
      setNewName("");
    }
  };
  const deletePerson = (id, name) => {
    if (window.confirm(`delete ${name} ?`)) {
      personService.deletePerson(id).then((toDelete) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter fillterName={fillterName} handleFilterChange={handleFilterChange} />
      <h1> add a new </h1>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} AddPerson={AddPerson} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={(id, name) => deletePerson(id, name)} />
    </div>
  );
};

export default App;
