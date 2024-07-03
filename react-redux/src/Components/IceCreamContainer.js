import React from "react";
import { buyIceCream } from "../Redux";
import { connect } from "react-redux";
import { Button } from "@mui/material";

function IceCreamContainer(props) {
  console.log(props);
  return (
    <div>
      <h2> Number of Ice-creams : {props.numOfIceCreams} </h2>
      <Button onClick={props.buyIceCream} variant="contained">
        Order Ice-cream
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
