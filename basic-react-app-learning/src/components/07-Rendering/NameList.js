import React from "react";
import Person from "./Person";

function NameList() {
  // const names = ["Dinesh", "Ravi", "Akhil", "Aditya"];

  const persons = [
    {
      id: 1,
      name: "Dinesh",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Ravi",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Akhil",
      age: 28,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Aditya",
      age: 32,
      skill: "Node",
    },
  ];

  // Key should be lept in parent tag only
  const personsMap = persons.map((person) => (
        <Person key={person.id} person={person} ></Person>
  ));

  return (
    <div>
      {personsMap}
    </div>
  );
}

export default NameList;
