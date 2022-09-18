import React from "react";
import {
  BrowserRouter as Router,
  Routes as Navigation,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation>
          <Route path="/" element={<Home />} />
          <Route path="/new-employee" element={<NewEmployee />} />
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
