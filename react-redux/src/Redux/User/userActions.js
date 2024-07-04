import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCCESS,
} from "./userTypes";
import axois from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axois
      .get("https://jsonplaceholder.org/users")
      .then((response) => {
        console.log(response);
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
