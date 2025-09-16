import React, { useState } from "react";
import Homepage from "./components/homepage";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="container">
      {showLogin ? (
        <Login onLogin={() => alert("You are logged in!")} />
      ) : (
        <Homepage onStart={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
