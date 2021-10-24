import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Card from "./Components/Card.js";
import Footer from "./Components/Footer.js"
import Api from "./Components/Api.js"
import { FaAppStoreIos } from "react-icons/fa";

function App() {
 
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div>
        <p className="featurehead" title="swiggy bangaluru urban">Featured listing</p>
      </div>
      <div className="card_hi row">
        <Api/>
      </div>
  
      <div className = "divison-container"style={{ backgroundColor: 'white' }}>google ads</div>
      <div className="job-listing-banner-container text-center" style={{ marginTop: "8rem" }}>Contact us personalized job listings</div>
      <Footer />
    </div>
  );
}
export default App;