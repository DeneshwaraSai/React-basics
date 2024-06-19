import React, { useState } from "react";

function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`My name is ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label> First Name : </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br></br>
        <label> Last Name : </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <br></br>
        <button> Submit </button>
      </form>

      <div></div>
    </div>
  );
}

export default UserForm;
