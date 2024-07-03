import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2> Number of cakes : {props.numOfCakes} </h2>
      <TextField
        type="number"
        label="Cake Count" 
        variant="outlined"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br></br> <br></br>
      <Button onClick={() => props.buyCake(number)} variant="contained">
        Purchase {number} Cake
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {dispatch(buyCake(number))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
