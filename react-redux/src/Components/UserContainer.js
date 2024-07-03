import React, { useEffect } from "react";
import { connect } from "react-redux";

function UserContainer({ userData, fetchUsers }) {
  return <div>Users :</div>;
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default UserContainer;
