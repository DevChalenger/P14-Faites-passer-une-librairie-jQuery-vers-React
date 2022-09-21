import { useState } from "react";

const RegExp = () => {
  const [value, setValue] = useState("");

  const firstName = {
    error: () => {},
    errorMessage: "The first name must be a string",
  };
  const lastName = {
    error: () => {},
    errorMessage: "The last name must be a string",
  };
  const dateOfBirth = {
    error: () => {},
    errorMessage: "",
  };
  const startDate = {
    error: () => {},
    errorMessage: "",
  };
  const department = {
    error: () => {},
    errorMessage: "",
  };
  const street = {
    error: () => {},
    errorMessage: "",
  };
  const city = {
    error: () => {},
    errorMessage: "",
  };
  const state = {
    error: () => {},
    errorMessage: "",
  };
  const zipCode = {
    error: () => {},
    errorMessage: "",
  };

  return {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    department,
    street,
    city,
    state,
    zipCode,
  };
};

export default RegExp;
