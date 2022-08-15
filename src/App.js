import logo from "./logo.svg";
import "./App.css";
import { Routes ,Route } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Home from '../src/Home/Home'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/'element={<Home/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
