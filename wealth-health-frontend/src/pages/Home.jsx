import { Link } from "react-router-dom";
import TitlePage from "../utils/TitlePage";

function Home() {
  return (
    <main className="main-container home-container">
      <TitlePage title="Home" />
      <section>
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
