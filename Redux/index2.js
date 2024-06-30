const redux = require("redux");
const createStore = redux.createStore;

// Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function BuyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action ",
  };
}

function BuyIceCream() {
    return {
      type: BUY_ICECREAM,
    };
  }
  
// Reducer

const initialstate = {
  numOfCakes: 10,
  numOfIceCreams: 10,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

      case BUY_ICECREAM:
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state : ", store.getState());

store.subscribe(() => {
  console.log("Updated state : ", store.getState());
});

store.dispatch(BuyCake()); // Executes the reducer function
store.dispatch(BuyCake()); // Executes the reducer function
store.dispatch(BuyCake()); // Executes the reducer function
store.dispatch(BuyIceCream()); // Executes the reducer function
store.dispatch(BuyIceCream());// Executes the reducer function
 
console.log(store.getState());
