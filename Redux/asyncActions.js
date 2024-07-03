const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default
const axois = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCCESS = "FETCH_USERS_SUCCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: "Error while fetching data.",
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
   return function (dispatch) {
    dispatch(fetchUsersRequest());
    axois.get('https://www.jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response);
        const users = response.data.map(user => user.id);
        dispatch(fetchUsersSuccess(users));
    })
    .catch((error)=>{
        console.log(error);
        dispatch(fetchUsersFailure(error.message));
    })
   }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(fetchUsers);
