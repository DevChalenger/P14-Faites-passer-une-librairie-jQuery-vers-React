import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

function Work() {
  return (
    <fieldset className="principal-information information-container">
      <Box sx={{ minWidth: 120, maxWidth: 190 }} className="field-block">
        <FormControl className="form-control">
          <TextField
            type="text"
            label="Start Date"
            size="small"
            className="start-date"
            required
            id="outlined-required"
          />
        </FormControl>
      </Box>
    </fieldset>
  );
}

export default Work;
