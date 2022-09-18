import stateData from "../../__mock__/data_state.json";

function Address() {
  return (
    <fieldset className="address-information information-container">
      <legend>Address</legend>
      <div className="field-block">
        <label htmlFor="street">Street</label>
        <input id="street" type="text" />
      </div>
      <div className="field-block">
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
      </div>
      <div className="field-block">
        <label htmlFor="state">State</label>
        <select name="state" id="state">
          {stateData.map((state) => (
            <option value={state.abbreviation} key={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field-block">
        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </div>
    </fieldset>
  );
}

export default Address;
