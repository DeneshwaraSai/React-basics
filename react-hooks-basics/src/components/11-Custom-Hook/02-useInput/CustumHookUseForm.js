import React, { useState } from "react";
import useInput from "./useInput";

function CustumHookUseForm() {
  const [firstName, resetFirstName, bindFirstName] = useInput("");
  const [lastName, resetLastName, bindLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`My name is ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label> First Name : </label>
        <input type="text" {...bindFirstName} />

        <br></br>
        <label> Last Name : </label>
        <input type="text" {...bindLastName} />

        <br></br>
        <button> Submit </button>
      </form>

      <div></div>
    </div>
  );
}

export default CustumHookUseForm;
