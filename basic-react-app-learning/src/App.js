import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/01-Functional-Class-Component/greet";
import Welcome from "./components/01-Functional-Class-Component/Welcome";
import Hello from "./components/02-JSX/Hello";
import GreetProps from "./components/03-props/GreetProps";
import WelcomeProps from "./components/03-props/WelcomeProps";
import Message from "./components/04-State/Mesage";
// import Counter from "./components/04-State/Counter";
import ClickEvent from "./components/05-Event-Handling/ClickEvent";
import ClassClick from "./components/05-Event-Handling/ClassClick";
import EventBind from "./components/05-Event-Handling/EventBind";
import ParentComponent from "./components/05-Event-Handling/ParentComponent";
import ConditionalRendering from "./components/06-Conditional-Rendering/ConditionalRendering";
import NameList from "./components/07-Rendering/NameList";
import StyleSheet from "./components/08-Styling/StyleSheet";
import InLine from "./components/08-Styling/InLine";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Forms from "./components/09-Forms/Forms";
import LifeCycleA from "./components/10-LifeCycle/LifeCycleA";
import FragmentDemo from "./components/11-Fragments/FragmentDemo";
import Table from "./components/11-Fragments/Table";
import PureComp from "./components/12-PureComponent/PureComp";
import ParentComp from "./components/13-Memo/ParentComp";
import RefDemo from "./components/14-Refs/RefDemo";
import CallBackRefs from "./components/14-Refs/CallBackRefs";
import FocusInput from "./components/14-Refs/FocusInput";
import FRParent from "./components/15-Forward-Refs/FRParent";
import PortalDemo from "./components/16-Portals/Portal-Demo";
import Hero from "./components/17-Error-Boundary/Hero";
import ErrorBoundary from "./components/17-Error-Boundary/ErrorBoundary";
import ClickCounter from "./components/18-Higher-Order/ClickCounter";
import HoverCounter from "./components/18-Higher-Order/HoverCounter";
import ClickCounterTwo from "./components/19-Render/ClickCounterTwo";
import HoverCounterTwo from "./components/19-Render/HoverCounterTwo";
import User from "./components/19-Render/User";
import Counter from "./components/19-Render/Counter";
import GetList from "./components/20-HTTP-Requests/GetList";
import PostForm from "./components/20-HTTP-Requests/PostForm";
import CComponent from "./components/21-Context/CComponent";
import { UserProvider } from "./components/21-Context/UserContext";

function App() {
  return (
    <div className="App">
      <br></br> <br></br>
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
      {/* <Greet />
      <Welcome /> 
      <Hello /> */}
      {/* <GreetProps name="John" heroName="Bat Man">
        This is a testing react App  
      </GreetProps>
      
      <GreetProps name="Mary" heroName="Spider Man">
        <button> Submit </button>
      </GreetProps>

      <GreetProps name="Dinesh" heroName="Iron Man" >
        <input type='text'></input>
      </GreetProps> */}
      {/* END OF FUNCTIONAL PROPS */}
      {/* <WelcomeProps name="Dinesh" >
        <p> This is testing class.</p>
      </WelcomeProps>

      <WelcomeProps name="John" >
        <button> click me </button>
      </WelcomeProps>

      <WelcomeProps name="Mary" >
        <input type='text' />
      </WelcomeProps>
       */}
      {/* END OF CLASS PROPS */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <ClickEvent />
      <ClassClick />
      <EventBind /> */}
      {/* <ParentComponent />  
      <ConditionalRendering /> 
      <NameList /> */}
      {/* 
      <h1 className="error"> ERROR CHECK </h1>
      <h1 className={styles.success}> SUCCESS CHECK </h1>
      <StyleSheet primary={true} />
      <InLine /> */}
      {/* <Forms /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo />
      <Table /> */}
      {/* Pure Component */}
      {/* <ParentComp /> */}
      {/* <ParentComp /> */}
      {/* <RefDemo /> */}
      {/* <CallBackRefs /> */}
      {/* <FocusInput /> */}
      {/* <FRParent /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="SpiderMan" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name='Deneshwara Sai' />
      <HoverCounter name='Deneshwara Sai Ila' /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Deneshwara Sai Ila' : 'Guest User' }/> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <GetList /> */}
      {/* <PostForm /> */}
      {/* <CComponent /> */}

      <UserProvider value="Deneshwara Sai Ila">
        <CComponent />
      </UserProvider>

    </div>
  );
}

export default App;
