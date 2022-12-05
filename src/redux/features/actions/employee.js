import { selectEmployee } from "../../selectors";
import { pending, rejected, resolved } from "../reducers/employee";
import { PENDING } from "../reducers/status";

export const createEmployee = (formValue) => {
  return async (dispatch, getState) => {
    const status = selectEmployee(getState()).status;
    if (status === PENDING) {
      return;
    }
    dispatch(pending());
    try {
      dispatch(resolved(formValue));
    } catch (error) {
      dispatch(rejected());
    }
  };
};
