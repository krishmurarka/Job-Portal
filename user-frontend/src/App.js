import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Card from "./Components/Card.js";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div>
        <p className="featurehead" title="swiggy bangaluru urban">Featured listing</p>
      </div>
      <Card />
    </div>
  );
}

export default App;
