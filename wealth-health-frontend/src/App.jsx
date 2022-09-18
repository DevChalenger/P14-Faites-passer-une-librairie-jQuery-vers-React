import React from "react";
import {
  BrowserRouter as Router,
  Routes as Navigation,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import CurrentEmployees from "./pages/CurrentEmployees";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";
import "./styles/css/app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation>
          <Route path="/" element={<Home />} />
          <Route path="/new-employee" element={<NewEmployee />} />
          <Route path="/current-employees" element={<CurrentEmployees />} />
          <Route path="/about" element={<About />} />
        </Navigation>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
