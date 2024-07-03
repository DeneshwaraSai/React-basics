import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../Redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h4> Number of cakes : {numOfCakes}</h4>
      <Button onClick={() => dispatch(buyCake())} variant="contained">
        Order Cake
      </Button>
    </div>
  );
}

export default HooksCakeContainer;
