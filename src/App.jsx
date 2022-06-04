import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Works from "./components/works/Works";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [isMenuOpen, setMenu] = useState(false);
  return (
    <div className="app">
      <Navbar isMenuOpen={isMenuOpen} setMenu={setMenu} />
      <Menu isMenuOpen={isMenuOpen} setMenu={setMenu} />
      <div className="sections">
        <Home />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
