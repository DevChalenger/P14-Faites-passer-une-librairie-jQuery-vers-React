import stateData from "../../__mock__/data_state.json";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { useState } from "react";

function Address() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <fieldset className="address-information information-container">
      <legend>Address</legend>
      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl className="form-control">
          <TextField
            type="text"
            label="Street"
            size="small"
            className=""
            required
            id="street"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl className="form-control">
          <TextField
            type="text"
            label="City"
            size="small"
            className="city"
            required
            id="outlined-required"
          />
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl required fullWidth className="form-control">
          <InputLabel
            id="state-select-label"
            className="form-label"
            size="small"
          >
            State *
          </InputLabel>
          <Select
            labelId="state-select-label"
            id="demo-simple-select"
            size="small"
            className="form-select"
            value={selectedOption}
            label="State *"
            onChange={handleChange}
          >
            {stateData.map((state) => (
              <MenuItem value={state.abbreviation} key={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="field-block" sx={{ minWidth: 120, maxWidth: 190 }}>
        <FormControl className="form-control">
          <TextField
            type="number"
            label="Zip Code"
            required
            className="zip-code"
            id="outlined-required"
            size="small"
          />
        </FormControl>
      </Box>
    </fieldset>
  );
}

export default Address;
