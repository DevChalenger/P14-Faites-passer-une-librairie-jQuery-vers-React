import departmentData from "../../__mock__/data_department.json";

function Principal() {
  return (
    <div className="principal-information information-container">
      <div className="field-block">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
      </div>
      <div className="field-block">
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
      </div>
      <div className="field-block">
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />
      </div>
      <div className="field-block">
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />
      </div>
      <div className="field-block">
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          {departmentData.map((department) => (
            <option key={department.name}>{department.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Principal;
