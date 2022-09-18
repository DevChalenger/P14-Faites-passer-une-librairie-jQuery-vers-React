import AdressInformation from "./FormComponents/Address";
import Department from "./FormComponents/Department";
import PrincipalInformation from "./FormComponents/Principal";

function Form() {
  return (
    <form action="POST" id="create-employee" className="new-employee-form">
      <PrincipalInformation />
      <AdressInformation />
      <Department />
    </form>
  );
}

export default Form;
