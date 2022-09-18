import Logo from "../assets/wealth-health-logo.jpg";
import "../styles/css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <img src={Logo} alt="wealth-health" className="app-logo" />
      </div>
      <nav className="app-header-nav">
        <ul className="app-nav-items-container">
          <li className="app-nav-item">
            <Link to="/" className="app-nav-item-link">
              Home
            </Link>
          </li>
          <li className="app-nav-item">
            <Link to="/current-employees" className="app-nav-item-link">
              Current employees
            </Link>
          </li>
          <li className="app-nav-item">
            <Link to="/new-employee" className="app-nav-item-link">
              New employee
            </Link>
          </li>
          <li className="app-nav-item">
            <Link to="/about" className="app-nav-item-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
