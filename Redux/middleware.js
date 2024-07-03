const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function BuyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux for BUY_CAKE Action ",
  };
}

function BuyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux for BUY_ICECREAM Action ",
  };
}

// Reducers
const initialIceCream = {
  numOfIceCreams: 10,
};

const initialCakes = {
  numOfCakes: 20,
};

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const cakeReducer = (state = initialCakes, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

/* 
// Method 1 

console.log("Executing Method 1 : ");

const cakeStore = createStore(cakeReducer);
const iceCreamStore = createStore(iceCreamReducer);

console.log("Init Cake Store : ", cakeStore.getState());
console.log("Init Ice Cream Store : ", iceCreamStore.getState());

cakeStore.subscribe(() => {
  console.log("In cake Store Subscription : ", cakeStore.getState());
});

iceCreamStore.subscribe(() => {
  console.log("Ice Cream Store Subscription : ", iceCreamStore.getState());
});

cakeStore.dispatch(BuyCake());
iceCreamStore.dispatch(BuyIceCream());
cakeStore.dispatch(BuyCake());
iceCreamStore.dispatch(BuyIceCream());
cakeStore.dispatch(BuyCake());


console.log("\nEnd Cake Store : ", cakeStore.getState());
console.log("End Ice Cream Store : ", iceCreamStore.getState());
*/

console.log("Executing Method 2 : ");
const rootreducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
})

const store  = createStore(rootreducer, applyMiddleWare(logger));

console.log("init state : ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated Store :" , store.getState(), '\n');
});

store.dispatch(BuyCake());
store.dispatch(BuyIceCream());
store.dispatch(BuyCake());
store.dispatch(BuyIceCream());
store.dispatch(BuyCake());

unsubscribe();

console.log("End state : ", store.getState());
