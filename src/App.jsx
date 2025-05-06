import { useState } from "react";
import Flags from "./components/Flags";
import "./App.css";
import Routing from "./components/layout/Routing";
import DetailPage from "./components/DetailPage";
function App() {
  
  return (
    <>
    <DetailPage/>
   <Flags/>
    </>
  );
}

export default App;
