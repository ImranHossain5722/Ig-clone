import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import Header from "../src/Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
