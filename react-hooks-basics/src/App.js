import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";

import HookCounter from "./components/01-useState/HookCounter";
import HookCounterTwo from "./components/01-useState/HookCounterTwo";
import HookCounterThree from "./components/01-useState/HookCounterThree";
import HookCounterFour from "./components/01-useState/HookCounterFour";

import ClassCounterOne from "./components/02-useEffect/ClassCounterOne";
import HookEffectCounterOne from "./components/02-useEffect/HookEffectCounterOne";

import ClassMouse from "./components/02-useEffect/ClassMouse";
import HookMouse from "./components/02-useEffect/HookMouse";
import MouseContainer from "./components/02-useEffect/MouseContainer";

import IntervalClassCounter from "./components/02-useEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/02-useEffect/IntervalHookCounter";

import DataFetching from "./components/03-Fetch-Data/DataFetching";
import DataFetchingSingle from "./components/03-Fetch-Data/DataFetchingSingle";

// import CounterOne from "./components/05-useReducer/CounterOne";
import CounterTwo from "./components/05-useReducer/CounterTwo";
import CounterThree from "./components/05-useReducer/CounterThree";

import ComponentA from "./components/06-useReducer-useContext/ComponentA";
import ComponentB from "./components/06-useReducer-useContext/ComponentB";
import ComponentC from "./components/06-useReducer-useContext/ComponentC";
import DataFetchingOne from "./components/07-Fetch-Data-useReducer/DataFetchingOne";
import DataFetchingTwo from "./components/07-Fetch-Data-useReducer/DataFetchingTwo";
import ParentComponent from "./components/08-useCallBack/ParentComponent";
import Counter from "./components/09-useMemo/Counter";
import FocusInput from "./components/10-useRef/FocusInput";
import ClassTimer from "./components/10-useRef/ClassTimer";
import HookTimer from "./components/10-useRef/HookTimer";
import DocTitleHook from "./components/11-Custom-Hook/DocTitleHook";
import DocTitleHookTwo from "./components/11-Custom-Hook/DocTitleHookTwo";
import CustomCounterTwo from "./components/11-Custom-Hook/01-useCounter/CounterTwoCustom";
import CounterOne from "./components/11-Custom-Hook/01-useCounter/CounterOne";
import UserForm from "./components/11-Custom-Hook/02-useInput/UserForm";
import CustumHookUseForm from "./components/11-Custom-Hook/02-useInput/CustumHookUseForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
const initialState = 0;

// state - PrevState
const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <br></br> 
      <br></br>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <ComponentA /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* <ClassCounterOne /> */}
      {/* <HookEffectCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}

      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}

      {/* <DataFetching /> */}
      {/* <DataFetchingSingle /> */}

      {/* <UserContext.Provider value={"Deneshwara Sai"}>
        <ChannelContext.Provider value={'React Tutorials'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetchingOne />
      <DataFetchingTwo /> */}

      {/* <ParentComponent /> */}

        {/* <Counter /> */}

        {/* <FocusInput /> */}
        {/* <ClassTimer />
        <HookTimer /> */}

        {/* <DocTitleHook />
        <DocTitleHookTwo /> */}

        {/* <CounterOne />
        <br></br>
        <CustomCounterTwo /> */}

        <UserForm />
        <br></br>
        <CustumHookUseForm />
    </div>
  );
}

export default App;
