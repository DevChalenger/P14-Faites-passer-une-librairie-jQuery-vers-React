import { Link } from "react-router-dom";
import TitlePage from "../utils/TitlePage";
import Theme from "../utils/Theme";

import "../styles/css/home.css";

function Home() {
  const { backgroundTheme, contentTheme } = Theme();
  return (
    <main className="main-container home-container">
      <TitlePage title="Home" />
      <section className={`${backgroundTheme} ${contentTheme} home-section`}>
        <h1>
          Welcome to HRnet! This is our company's internal application to create
          and view employee records.
        </h1>
        <p>
          If you want to join our company follow that link{" "}
          <Link to="/new-employee"> New employee</Link>
        </p>
      </section>
    </main>
  );
}

export default Home;
