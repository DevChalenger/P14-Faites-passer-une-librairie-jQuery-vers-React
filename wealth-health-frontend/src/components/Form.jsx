import AdressInformation from "./FormComponents/Address";
import Button from "./FormComponents/Button";
import PrincipalInformation from "./FormComponents/Principal";

function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      id="create-employee"
      className="new-employee-form"
    >
      <PrincipalInformation />
      <AdressInformation />
      <Button />
    </form>
  );
}

export default Form;
