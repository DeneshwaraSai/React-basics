import React, { useState } from "react";

const initialState = ["Bruce", "John"];

const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);
  
  const handleClick = () => { 
    // persons.push('Kent');
    // persons.push('Williams');
    // setPersons(persons);
    
    const personsList = [...persons];
    personsList.push('Kent');
    personsList.push('Williams');
    setPersons(personsList);
  }

  console.log("rendered ArrayUseState");
  
  return (
    <div>
        <button onClick={handleClick}> Add Person </button>
      {persons.map((person) => {
        return <div key={person}>{person}</div>;
      })}
    </div>
  );
};

export default ArrayUseState;
