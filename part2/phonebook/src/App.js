import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import personService from "./service/person";
import Notification from "./components/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [fillterName, setFilterName] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("successful");

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
    let duplicate = names.indexOf(newName);
    if (duplicate === -1) {
      const personObjet = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObjet).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNotification(`added ${newName}`);
        setNotificationType("successful");
        setTimeout(() => setNotification(""), 2000);
      });
    } else {
      duplicate++;
      if (window.confirm(`${newName} is already addded to Phonebook, replace the old number with a new one?`)) {
        const personObjet = {
          name: newName,
          number: newNumber,
        };
        personService
          .update(duplicate, personObjet)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => (person.id !== duplicate ? person : returnedPerson)));
          })
          .catch((error) => {
            const person = persons.find((per) => per.id === duplicate);
            setNotification(`Information of ${person.name} has already been removed from server`);
            setNotificationType("error");
            setPersons(persons.filter((per) => per.id !== duplicate));
          });
        setNewNumber("");
        setNotification(`Update ${newName}`);
        setTimeout(() => setNotification(""), 2000);
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
      <Notification message={notification} type={notificationType} />
      <Filter fillterName={fillterName} handleFilterChange={handleFilterChange} />
      <h1> add a new </h1>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} AddPerson={AddPerson} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={(id, name) => deletePerson(id, name)} />
    </div>
  );
};

export default App;
