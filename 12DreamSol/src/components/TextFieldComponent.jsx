// components/TextFieldComponent.js
import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldComponent = ({
  label,
  value = "",
  onChange,
  multiline,
  rows,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      // margin="normal"
      multiline={multiline}
      rows={rows}
      variant="outlined"
    />
  );
};

export default TextFieldComponent;
