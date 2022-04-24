import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Favorite from "./components/Favorite";
import Flowers from "./components/Flowers";
import Staff from "./components/Staff";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Hero></Hero>
      <Flowers id="menu"></Flowers>
      <Favorite id="favorite"></Favorite>
      <Staff id="staff"></Staff>
      <Footer id="contact"></Footer>
    </Router>
  );
}

export default App;
