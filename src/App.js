import React from "react";
import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <Profile></Profile>
      <Login></Login>
      <ChangeColor></ChangeColor>
    </div>
  );
};

export default App;
