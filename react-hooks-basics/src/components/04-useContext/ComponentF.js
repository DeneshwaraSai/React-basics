import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";

function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    console.log(user);
    console.log(channel);
    
    return (
    <div>
        {/* Method - 1 */}
      {/* <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    The username is {user} and channel name is {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer> */}

      {/* Method - 2 */}
      {user} - {channel}
      <br></br>
      Component F
    </div>
  );
}

export default ComponentF;
