import React, { useContext } from "react";
import { Context } from "./context";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function FormOfTodo() {
  const { value, handleChange } = useContext(Context);
  const { handleClear } = useContext(Context);
  return (
    <Box sx={{ display: 'flex',
    flexDirection: 'column'}} >
      <Box
        component="form"
        sx={{mx:"auto",
          "& > :not(style)": { m: 1, width: "40ch", },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
        required
          id="outlined-basic"
          label="ToDo"
          variant="outlined"
          type="text"
          value={value.todoITEM}
          onChange={(e) => handleChange("todoITEM", e.target.value)}
        />
      </Box>
      <Stack direction="row" sx={{mx:"auto"}} spacing={2}>
        <Button
          type="reset"
          onClick={() => handleClear()}
          variant="outlined"
          startIcon={<RestartAltIcon />}
        >
          RESET
        </Button>
        <Button
          type="submit"
          value="Add Form"
          variant="contained"
          endIcon={<AddIcon />}
        >
          ADD
        </Button>
      </Stack>
    </Box>
  );
}

export default FormOfTodo;
