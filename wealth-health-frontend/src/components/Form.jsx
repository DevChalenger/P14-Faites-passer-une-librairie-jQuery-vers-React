import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/fr";

import stateData from "../__mock__/data_state.json";
import departmentData from "../__mock__/data_department.json";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createEmployee } from "../redux/features/actions/employee";

function Form() {
  const { register, handleSubmit, reset, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Form State

  const [selectedDateBirth, setSelectedDateBirth] = useState(dayjs());
  const [selectedDateStart, setSelectedDateStart] = useState(dayjs());

  const resetForm = () => {
    reset();
    setSelectedDateBirth(dayjs());
    setSelectedDateStart(dayjs());
  };
  const handleChangeDateStart = (value) => {
    setSelectedDateStart(value);
  };

  const handleChangeDateBirth = (value) => {
    setSelectedDateBirth(value);
  };

  const submitForm = (data) => {
    dispatch(createEmployee(data));
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

          <TextField
            type="text"
            label="First Name"
            size="small"
            className="form-control"
            required
            id="first-name"
            {...register("firstName")}
          />

          <TextField
            type="text"
            label="Last Name"
            size="small"
            className="form-control"
            required
            id="last-name"
            {...register("lastName")}
          />

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
            <Controller
              name="department"
              defaultValue=""
              className="form-control"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  size="small"
                  label="Department"
                  id="departmenet"
                  className="form-select"
                  required
                >
                  {departmentData.map((state) => (
                    <MenuItem value={state.name} key={state.name}>
                      {state.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
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
          <FormControl className="form-control">
            <Controller
              required
              name="state"
              defaultValue=""
              className="form-control"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  size="small"
                  label="State"
                  id="state"
                  className="form-select"
                  required
                >
                  {stateData.map((state) => (
                    <MenuItem
                      value={state.abbreviation}
                      key={state.abbreviation}
                    >
                      {state.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
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
          <Button className="button-submit button-form" type="submit">
            Save
          </Button>
          <Button
            className="button-cancel button-form"
            onClick={(e) => {
              e.preventDefault();
              resetForm();
            }}
          >
            Cancel
          </Button>
        </Box>
      </LocalizationProvider>
    </form>
  );
}

export default Form;
