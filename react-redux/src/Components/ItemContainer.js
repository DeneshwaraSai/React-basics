import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../Redux";
import { Button } from "@mui/material";

function ItemContainer(props) {
  return (
    <div>
      <h2> Item - {props.item}, Item name : {props.orderName} </h2>
      <Button onClick={() => props.dispatch()} variant="contained"> order {props.orderName} </Button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
    orderName: ownProps.cake ? 'cake' : 'Ice-cream'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    dispatch: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
