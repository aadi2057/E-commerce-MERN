import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
// import { Products, Navbar } from "./components";

function App() {
  // useEffect(() => {
  //   document.title = "New title";
  // });
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
