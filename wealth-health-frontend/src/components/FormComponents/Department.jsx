import departmentData from "../../__mock__/data_department.json";

function Department() {
  return (
    <div className="department-information information-container">
      <div>
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

export default Department;
