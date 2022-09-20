import departmentData from "../../__mock__/data_department.json";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

function Principal() {
  return (
    <fieldset className="principal-information information-container">
      <legend>Principal</legend>
      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl className="form-control">
          <TextField
            type="text"
            label="First Name"
            size="small"
            required
            className="first-name"
            id="outlined-required"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl className="form-control">
          <TextField
            type="text"
            label="Last Name"
            className="last-name"
            size="small"
            required
            id="outlined-required"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl className="form-control">
          <TextField
            type="text"
            label="Date of Birth"
            size="small"
            className="date-of-birth"
            required
            id="outlined-required"
          />
        </FormControl>
      </Box>

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
    </fieldset>
  );
}

export default Principal;
