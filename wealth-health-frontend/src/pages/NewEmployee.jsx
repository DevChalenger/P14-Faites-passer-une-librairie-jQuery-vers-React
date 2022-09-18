import Form from "../components/Form";
import "../styles/css/newEmployee.css";

function NewEmployee() {
  return (
    <main className="new-employee-container main-container">
      <section className="new-employee-section">
        <h1>Create Employee</h1>
        <Form />
      </section>
    </main>
  );
}

export default NewEmployee;
