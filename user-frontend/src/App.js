import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Card from "./Components/Card.js";
import Footer from "./Components/Footer.js"
function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div>
        <p className="featurehead" title="swiggy bangaluru urban">Featured listing</p>
      </div>
      <div className="card_hi">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card_hi" style={{ marginTop: "3rem" }}>
        <Card />
        <Card />
        <Card />

      </div>
      <Footer />
    </div>
  );
}

export default App;
