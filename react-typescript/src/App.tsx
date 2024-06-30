// import { profile } from "console";
import "./App.css";
// import { Button } from "./Components/01-Props/Button";
// import { Greet } from "./Components/01-Props/Greet";
// import { Heading } from "./Components/01-Props/Heading";
// import { Input } from "./Components/01-Props/Input";
// import { Oscar } from "./Components/01-Props/Oscar";
// import { Person } from "./Components/01-Props/Person";
// import { PersonList } from "./Components/01-Props/PersonList";
// import { Status } from "./Components/01-Props/Status";
// import { Container } from "./Components/02-Styles/Container";
// import { LoggedIn } from "./Components/03-UseState/LoggedIn";
// // import { User } from "./Components/03-UseState/User";
// import { Counter } from "./Components/04-UseReducer/Counter";
// import { CounterTwo } from "./Components/04-UseReducer/CounterTwo";
// import { Box } from "./Components/05-UseContext/Box";
// import { ThemeContextProvider } from "./Components/05-UseContext/ThemeContext";
// import { User } from "./Components/06-UseContext-Future/User";
// import { UserContextProvider } from "./Components/06-UseContext-Future/UserContext";
// import { DomRef } from "./Components/07-UseRef/DomRef";
// import { MutableRef } from "./Components/07-UseRef/MutableRef";
// import CounterClass from "./Components/08-ClassComponents/CounterClass";
import { Private } from "./Components/09-ComponentProp/Private";
import { Profile } from "./Components/09-ComponentProp/Profile";
import { RandomNumber } from "./Components/09-ComponentProp/RandomNumber";
import { Toast } from "./Components/10-TemplateLiterals/Toast";
import { CustomButton } from "./Components/11-WrappingHTML/CustomButton";
import { Test } from "./Components/13-Polymorphic/Test";

function App() {
  const personName = {
    first: "John",
    last: "Williams",
  };

  const personList = [
    {
      first: "John",
      last: "Williams",
    },
    {
      first: "William",
      last: "Morgan",
    },
    {
      first: "David",
      last: "Warner",
    },
  ];

  return (
    <div className="App">
      <br></br>
      {/* <Greet name="Dinesh" messageCount={20} isloggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} /> */}
      {/* <Status status="success" />
      <Heading> PlaceHolder text </Heading>

      <Oscar>
      <Heading> PlaceHolder text </Heading>
      </Oscar>

      <Greet name="Dinesh" isloggedIn={true} /> */}
      {/* <Button
        handleClick={() => {
          console.log("In handle Click");
        }}
      ></Button>

      <Button
        handleClick2={() => {
          console.log("In handle Click 2");
          return "";
        }}
      ></Button>

      <Button
        handleEvent={(event, id) => {
          console.log("In event :", event, id);
        }}
      ></Button>  */}
      {/* <Input value="" handleClick={(event) => {         
        console.log(event.target.value)
        return event.target.value;
      }} /> */}

      {/* <Container styles={{ border: "1px solid black", padding: "2px" }} /> */}
      {/* <LoggedIn /> */}
      {/* <User />  */}
      {/* <Counter /> */}
      {/* <CounterTwo /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <DomRef />
      <MutableRef /> */}
      {/* <CounterClass message="Hello John"/> */}

      {/* <Private isLoggedIn={false} component={Profile} /> */}
      {/* <RandomNumber value={10} isPositive/> */}

      {/* <Toast position="center"/> */}

      {/* <CustomButton varient="primary">Primary Button</CustomButton> */}

      <Test as='h1' size='lg'>  heading </Test>
      <Test as='p' size='md'>  Paragraph </Test>
      <Test as='label' htmlFor="someId" size='sm' color="primary"> Label </Test>
    </div>
  );
}

export default App;
