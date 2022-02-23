import React, { useState } from "react";

function UserGreeting() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {loggedIn ? (
        <div
          style={{
            color: "darkblue",
            transition: ".25s",
          }}
        >
          Welcome Jaden
        </div>
      ) : (
        <div
          style={{
            color: "gray",
            transition: ".25s",
          }}
        >
          Welcome Guest
        </div>
      )}
      <button onClick={() => setLoggedIn(!loggedIn)}>click</button>
    </>
  );
}

export default UserGreeting;
