import React, { useEffect } from "react";
import { fetchUsers } from "../Redux/User/userActions";
import { connect } from "react-redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userData);
  return userData.loading ? (
    <h2> ... Loading</h2>
  ) : userData.error ? (
    userData.error
  ) : (
    <div>
      <h2> Users List </h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => {
            return (
              <h2 key={user.id}>
                {user.id} : {user.firstname} {user.lastname}{" "}
              </h2>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
