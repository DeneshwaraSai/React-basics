import "./App.css";
import UseState from "./Components/01-useState/UseState";
import { UseReducer } from "./Components/02-useReducer/UseReducer";
import ArrayUseState from "./Components/03-Immuatble-State/ArrayUseState";
import { ObjectUseState } from "./Components/03-Immuatble-State/ObjectUseState";
import Child from "./Components/04-Parent-Child/Child";
import Parent from "./Components/04-Parent-Child/Parent";
import ChildOne from "./Components/05-Optimization/ChildOne";
import GrandParent from "./Components/05-Optimization/GrandParent";
import ParentOne from "./Components/05-Optimization/ParentOne";
import ParentTwo from "./Components/05-Optimization/ParentTwo";
import { ParentFive } from "./Components/06-Incorrect-Optimization/ParentFive";
import ParentThree from "./Components/06-Incorrect-Optimization/ParentThree";

function App() {
  return (
    <div className="App">
      <br /> <br />
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState />
      <ArrayUseState /> */}
      {/* <Parent /> */}
{/* 
      <ParentOne >
        <ChildOne />
      </ParentOne> */}

      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      
      <ParentFive />
    </div>
  );
}

export default App;
