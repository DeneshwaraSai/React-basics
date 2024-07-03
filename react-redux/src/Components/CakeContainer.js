import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

function CakeContainer(props) {
  return (
    <div>
      <h2> Number of cakes : { props.numOfCakes } </h2>
      <Button onClick={props.buyCake} variant="contained"> Order Cake </Button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
