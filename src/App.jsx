import { useState } from "react";
import "./App.css";
import Backstage from "./components/Backstage";
import Frontsec from "./components/Frontsec";

function App() {
  return (
    <>
    <div className="w-full h-screen relative">
      <Backstage/>
      <Frontsec/>
    </div>
    </>
  );
}

export default App;
