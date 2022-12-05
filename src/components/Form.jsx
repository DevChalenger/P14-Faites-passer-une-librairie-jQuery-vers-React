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

import { useRef, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

const Form = ({ submitForm }) => {
  const ref = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

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
  useEffect(() => {
    if (errors) {
      console.log(errors);
    }
  });

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
              required
              type="text"
              ref={ref}
              label="First Name"
              className={errors.firstName ? "error" : ""}
              size="small"
              id="first-name"
              {...register("firstName", {
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: "First name must be a string",
                },
                required: `Please First Name is required`,
              })}
            />
            {errors.firstName ? <p>{errors.firstName.message}</p> : ""}
          </FormControl>
          <FormControl className="form-control">
            <TextField
              required
              type="text"
              label="Last Name"
              size="small"
              className={errors.lastName ? "error" : ""}
              id="last-name"
              {...register("lastName", {
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: "First name must be a string",
                },
                required: `Please First Name is required`,
              })}
            />
            {errors.lastName ? <p>{errors.lastName.message}</p> : ""}
          </FormControl>

          <FormControl className="form-control">
            <DesktopDatePicker
              value={selectedDateBirth}
              onChange={handleChangeDateBirth}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  type="text"
                  label="Date of Birth"
                  size="small"
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
                  required
                  {...params}
                  type="text"
                  label="Start Date"
                  id="start-date"
                  size="small"
                  {...register("startDate")}
                />
              )}
            />
          </FormControl>

          <FormControl fullWidth className="form-control">
            <Controller
              name="department"
              defaultValue=""
              className="form-control"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select a department",
                },
              }}
              render={({ field }) => (
                <TextField
                  required
                  {...field}
                  select
                  size="small"
                  label="Department"
                  id="department"
                  className={errors.department ? "error" : ""}
                >
                  {departmentData.map((state) => (
                    <MenuItem value={state.name} key={state.name}>
                      {state.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            {errors.department ? <p>{errors.department.message}</p> : ""}
          </FormControl>
        </fieldset>
        {/*Address Section*/}
        <fieldset className="address-information information-container">
          <legend>Address</legend>

          <FormControl className="form-control">
            <TextField
              required
              type="text"
              label="Street"
              size="small"
              className={errors.street ? "error" : ""}
              id="street"
              {...register("street", {
                pattern: {
                  value: /^\d+\s[A-z]+\s[A-z]+$/,
                  message: "City must be in correct format",
                },
                required: `Please The City is required`,
              })}
            />
            {errors.street ? <p>{errors.street.message}</p> : ""}
          </FormControl>

          <FormControl className="form-control">
            <TextField
              required
              type="text"
              label="City"
              size="small"
              id="city"
              className={errors.city ? "error" : ""}
              {...register("city", {
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: "City must be in correct format",
                },
                required: `Please The City is required`,
              })}
            />
            {errors.city ? <p>{errors.city.message}</p> : ""}
          </FormControl>
          <FormControl className="form-control">
            <Controller
              name="state"
              className="form-control"
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please select a state",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  select
                  size="small"
                  label="State"
                  id="state"
                  className={errors.state ? "error" : ""}
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
            {errors.state ? <p>{errors.state.message}</p> : ""}
          </FormControl>

          <FormControl className="form-control">
            <TextField
              required
              label="Zip Code"
              id="zip-code"
              size="small"
              className={errors.zipCode ? "error" : ""}
              {...register("zipCode", {
                pattern: {
                  value: /^\d{5}([-]|\s*)?(\d{4})?$/,
                  message: "Zip Code must be in correct format",
                },
                required: "Zip Code is required ",
              })}
            />
            {errors.zipCode ? <p>{errors.zipCode.message}</p> : ""}
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
};

export default Form;
