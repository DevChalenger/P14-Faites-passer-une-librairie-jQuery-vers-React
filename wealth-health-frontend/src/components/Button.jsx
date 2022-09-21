import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";

function Buttons() {
  const { reset } = useForm();

  return <Box className="button-container"></Box>;
}

export default Buttons;
