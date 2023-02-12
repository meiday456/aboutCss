import React from "react";
import "./App.css";
import Buttons from "./component/Buttons";
import Nesting from "./component/Nesting";
import Theme from "./component/Theme";

function App() {
  return (
    <>
      <Buttons />
      <hr />
      <Nesting />
      <hr />
      <Theme />
    </>
  );
}

export default App;
