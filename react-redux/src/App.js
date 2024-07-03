import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import HooksIceCreamContainer from "./Components/HooksIceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <br /> <br />
        {/* <CakeContainer />
        <HooksCakeContainer /> */}
        
        {/* <IceCreamContainer />
        <HooksIceCreamContainer /> */}
    {/* 
        <IceCreamContainer />

        <NewCakeContainer />

        <ItemContainer cake />

        <ItemContainer  /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
