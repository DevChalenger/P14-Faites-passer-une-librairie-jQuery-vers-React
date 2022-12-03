import React from "react";
import {
  BrowserRouter as Router,
  Routes as Navigation,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import CurrentEmployees from "./pages/CurrentEmployees";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";
import "./styles/css/app.css";

import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Header />
          <Navigation>
            <Route exact path="/" element={<Home />} />
            <Route path="/new-employee" element={<NewEmployee />} />
            <Route path="/current-employees" element={<CurrentEmployees />} />
          </Navigation>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
