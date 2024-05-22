// components/SelectFieldComponent.js
import React from "react";
import { TextField, MenuItem } from "@mui/material";

const SelectFieldComponent = ({ label, value = "", onChange, options }) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      variant="outlined"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectFieldComponent;
