import React, { useState } from "react";

function UserGreeting() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {loggedIn ? (
        <div
          style={{
            backgroundColor: "gray",
            color: "white",
            transition: ".25s",
          }}
        >
          Welcome Jaden
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "white",
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
