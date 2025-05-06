import { useState } from "react";
import Flags from "./components/Flags";
import "./App.css";
import Routing from "./components/layout/Routing";
function App() {

  return (
    <>
      <Routing />
      <Flags />
    </>
  );
}

export default App;
