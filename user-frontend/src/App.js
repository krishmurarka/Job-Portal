import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Home from "./pages/MainPage/home.js";
import {  Router, Switch, Route, Link } from "react-router-dom";
import Fte from "./pages/employment/fte.js";
import { FaAppStoreIos } from "react-icons/fa";
import Footer from "./Components/Footer.js"
import Login from "./pages/login/login.js";

function App() {
 
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Login/>
      <Footer />
      {/* <Home/> */}
    </div>
  );
}
export default App;