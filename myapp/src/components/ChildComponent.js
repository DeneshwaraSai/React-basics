import React from 'react'

function ChldComponent(props) {
  return (
    <div>
      {/* // cannot send any parameteres here <button onClick={props.greetHandler}> Greet Parent </button> */}
      <button onClick={() => props.greetHandler('Data from child component!')}> Greet Parent </button>

    </div>
  )
}

export default ChldComponent;
