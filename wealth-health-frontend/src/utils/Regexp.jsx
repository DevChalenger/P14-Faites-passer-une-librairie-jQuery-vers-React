const RegExp = () => {
  const firstName = {
    error: () => {},
    errorMessage: "First name must be a string",
  };
  const lastName = {
    error: () => {},
    errorMessage: "Last name must be a string",
  };
  const dateOfBirth = {
    error: () => {},
    errorMessage: "Date of birth must be in date format",
  };
  const startDate = {
    error: () => {},
    errorMessage: "Start date must be in date format",
  };
  const department = {
    error: () => {},
    errorMessage: "Department must be selected",
  };
  const street = {
    error: () => {},
    errorMessage: "Street must be in correct format",
  };
  const city = {
    error: () => {},
    errorMessage: "City must be a string",
  };
  const state = {
    error: () => {},
    errorMessage: "State must be selected",
  };
  const zipCode = {
    error: () => {},
    errorMessage: "ZipCode must be a number",
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
