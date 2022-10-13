import Form from "../components/Form";
import "../styles/css/newEmployee.css";
import useTheme from "../utils/Theme";
import TitlePage from "../utils/TitlePage";

function NewEmployee() {
  const { backgroundTheme, contentTheme } = useTheme();

  return (
    <main className="new-employee-container main-container">
      <TitlePage title="New Employee" />
      <section
        className={`new-employee-section ${backgroundTheme} ${contentTheme}`}
      >
        <h1>Create Employee</h1>
        <Form />
      </section>
    </main>
  );
}

export default NewEmployee;
