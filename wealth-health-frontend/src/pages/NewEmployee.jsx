import { Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { createEmployee } from "../redux/features/actions/employee";
import "../styles/css/newEmployee.css";
import useTheme from "../utils/Theme";
import TitlePage from "../utils/TitlePage";

function NewEmployee() {
  const { backgroundTheme, contentTheme } = useTheme();
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(createEmployee(data));
    setModal(true);
    setTimeout(() => {
      navigate("/current-employees");
    }, 3000);
  };

  return (
    <main className="new-employee-container main-container">
      <TitlePage title="New Employee" />
      <section
        className={`new-employee-section ${backgroundTheme} ${contentTheme}`}
      >
        <h1>Create Employee</h1>
        <Form submitForm={submitForm} />
      </section>

      {modal ? (
        <div
          className={`modal-new-employee ${backgroundTheme} ${contentTheme}`}
        >
          <span>New employee is added in the list</span>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default NewEmployee;
