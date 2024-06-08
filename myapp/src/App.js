import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import Greet, { Greet1 } from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/UpdateLifeCycle/LifeCycleA";
import LifeCycleB from "./components/UpdateLifeCycle/LifeCycleB";
import FragmentDemo from "./components/Fragments/FragmentDemo";
import Table from "./components/Fragments/Table";
import PureComp from "./components/PureComponnet/PureComp";
import ParentComp from "./components/Memo/ParentComp";
import RefsDemo from "./components/Refs/RefsDemo";
import InputRef from "./components/Refs/InputRef";
import FocusInput from "./components/Refs/FocusInput";
import FRParentInput from "./components/ForwardingRefs/FRParentInput";
import PortalDemo from "./components/Portals/PortalDemo";
import Hero from "./components/Errors/Hero";
import ErrorBoundary from "./components/Errors/ErrorBoundary";
import ClickCounter from "./components/HigherOrder/ClickCounter";
import HoverCounter from "./components/HigherOrder/HoverCounter";
// import ParentComp from "./components/PureComponnet/ParentComp";

// import LifeCycleA from "./components/LifeCycle/LifeCycleA";
// import LifeCycleB from "./components/LifeCycle/LifeCycleB";

function App() {
  return (
    <div className="App">
      {/*  className="App-header" */}
      <header>
        {/* <Greet1 /> <!-- Functional Component -->
        <Greet /><!-- Functional Component -->
        <Welcome /> <!-- Class Component --> */}
        {/* <Hello /> */}
        {/* <Greet name="Deneshwara" heroName="Spiderman">
          <p> This is children props </p>
        </Greet>
        <Greet name="Sai" heroName="batman">
          <button> Click me </button>
        </Greet>
        <Greet name="Ila" heroName="DC">
          <input type="text"></input>
        </Greet>

        <Welcome name="Dineshwara" heroName="Spiderman">
          <button> Click me </button>
        </Welcome>
        <Welcome name="Sai" heroName="batman">
          <p> This is children props </p>
        </Welcome>
        <Welcome name="Ila" heroName="DC">
          <input type="text" placeholder="Search for animals"></input>
        </Welcome> */}
        {/* USE OF STATE */}
        {/* <Message></Message> */}
        {/* setState <Counter></Counter> */}
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <ConditionalRendering></ConditionalRendering> */}

        {/* <NameList></NameList> */}

        {/* <h1> Testing CSS </h1>

        <h3 className="error"> Testing CSS FILE </h3>

        <h3 className={styles.success}> Testing CSS using module </h3> */}

        {/* <Form></Form> */}

        {/* <LifeCycleA></LifeCycleA> // component mounting lifecycle methods */}
        {/* <LifeCycleA></LifeCycleA> */}

        {/* <FragmentDemo></FragmentDemo>
        <Table></Table> */}

        {/* <ParentComp></ParentComp> Pure Components */}
        {/* <ParentComp></ParentComp>  Memos */}

        {/* <RefsDemo></RefsDemo> Function Ref */}

        {/* <FocusInput></FocusInput> */}

        {/* <FRParentInput /> */}
        {/* <PortalDemo></PortalDemo> */}

        {/* <ErrorBoundary>
          <Hero heroName="SpiderMan"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary> */}

        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
      </header>
    </div>
  );
}

export default App;
