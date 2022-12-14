import Logo from "../assets/wealth-health-logo.jpg";
import "../styles/css/header.css";
import { Link } from "react-router-dom";
import useTheme from "../utils/Theme";

const Header = () => {
  const { backgroundTheme, contentTheme } = useTheme();

  return (
    <header className={`app-header ${backgroundTheme}`}>
      <div className="app-header-title">
        <div className="app-header-logo">
          <img
            src={Logo}
            alt="wealth-health"
            className="app-logo"
            height={125}
            width={162}
          />
        </div>
        <h1 className={contentTheme}>Wealth health</h1>
      </div>
      <nav className="app-header-nav">
        <ul className="app-nav-items-container">
          <li className="app-nav-item">
            <Link to="/" className={`app-nav-item-link ${contentTheme}`}>
              Home
            </Link>
          </li>
          <li className="app-nav-item">
            <Link
              to="/current-employees"
              className={`app-nav-item-link ${contentTheme}`}
            >
              Current employees
            </Link>
          </li>
          <li className="app-nav-item">
            <Link
              to="/new-employee"
              className={`app-nav-item-link ${contentTheme}`}
            >
              New employee
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
