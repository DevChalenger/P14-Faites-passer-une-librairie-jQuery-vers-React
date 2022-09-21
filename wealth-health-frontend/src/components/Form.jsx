import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/fr";

import stateData from "../__mock__/data_state.json";
import departmentData from "../__mock__/data_department.json";

import { useState } from "react";

function Form() {
  const { register, handleSubmit, reset } = useForm();

  const [selectedState, setSelectedState] = useState("");
  const [selectedDateBirth, setSelectedDateBirth] = useState(dayjs());
  const [selectedDateStart, setSelectedDateStart] = useState(dayjs());
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleChangeDateStart = (value) => {
    setSelectedDateStart(value);
  };

  const handleChangeDateBirth = (value) => {
    setSelectedDateBirth(value);
  };

  const handleChangeState = (event) => {
    setSelectedState(event.target.value);
  };
  const handleChangeDepatment = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <form
      id="create-employee"
      onSubmit={handleSubmit(submitForm)}
      className="new-employee-form"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <fieldset className="principal-information information-container">
          <legend>Principal</legend>

          <FormControl className="form-control">
            <TextField
              type="text"
              label="First Name"
              size="small"
              required
              id="first-name"
              {...register("firstName")}
            />
          </FormControl>

          <FormControl className="form-control">
            <TextField
              type="text"
              label="Last Name"
              size="small"
              required
              id="last-name"
              {...register("lastName")}
            />
          </FormControl>

          <FormControl className="form-control">
            <DesktopDatePicker
              value={selectedDateBirth}
              onChange={handleChangeDateBirth}
              renderInput={(params) => (
                <TextField
                  {...params}
                  type="text"
                  label="Date of Birth"
                  size="small"
                  required
                  id="date-of-birth"
                  {...register("dateOfBirth")}
                />
              )}
            />
          </FormControl>
        </fieldset>
        {/*Principal Section*/}
        <fieldset className="work-information information-container">
          <legend>Work</legend>

          <FormControl className="form-control">
            <DesktopDatePicker
              value={selectedDateStart}
              onChange={handleChangeDateStart}
              renderInput={(params) => (
                <TextField
                  {...params}
                  type="text"
                  label="Start Date"
                  required
                  id="start-date"
                  size="small"
                  {...register("startDate")}
                />
              )}
            />
          </FormControl>

          <FormControl required fullWidth className="form-control">
            <InputLabel
              id="department-select-label"
              className="form-label"
              size="small"
            >
              Department
            </InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              size="small"
              className="form-select"
              value={selectedDepartment}
              label="Department *"
              onChange={handleChangeDepatment}
            >
              {departmentData.map((state) => (
                <MenuItem value={state.name} key={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </fieldset>
        {/*Address Section*/}
        <fieldset className="address-information information-container">
          <legend>Address</legend>

          <FormControl className="form-control">
            <TextField
              type="text"
              label="Street"
              size="small"
              required
              id="street"
              {...register("street")}
            />
          </FormControl>

          <FormControl className="form-control">
            <TextField
              type="text"
              label="City"
              size="small"
              required
              id="city"
              {...register("city")}
            />
          </FormControl>

          <FormControl required fullWidth className="form-control">
            <InputLabel
              id="state-select-label"
              className="form-label"
              size="small"
            >
              State
            </InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              size="small"
              className="form-select"
              value={selectedState}
              label="State *"
              onChange={handleChangeState}
            >
              {stateData.map((state) => (
                <MenuItem value={state.abbreviation} key={state.abbreviation}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="form-control">
            <TextField
              type="number"
              label="Zip Code"
              required
              id="zip-code"
              size="small"
              {...register("zipCode")}
            />
          </FormControl>
        </fieldset>
        <Box className="button-container">
          <button className="button-submit button-form">Save</button>
          <button
            className="button-cancel button-form"
            onClick={(e) => {
              e.preventDefault();
              reset();
            }}
          >
            Cancel
          </button>
        </Box>
      </LocalizationProvider>
    </form>
  );
}

export default Form;
