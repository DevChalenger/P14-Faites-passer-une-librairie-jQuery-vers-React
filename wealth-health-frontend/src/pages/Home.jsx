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
        <p>If you want to join our company </p>
      </section>
    </main>
  );
}

export default Home;
