import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../Redux";
import { Button } from "@mui/material";

function HooksIceCreamContainer(props) {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of Ice-creams : {numOfIceCreams} </h2>
      <Button onClick={() => dispatch(buyIceCream())} variant="contained">
        Order Ice-cream
      </Button>
    </div>
  );
}

export default HooksIceCreamContainer;
