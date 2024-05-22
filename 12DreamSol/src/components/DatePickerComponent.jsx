// components/DatePickerComponent.js
import React from "react";
import TextField from "@mui/material/TextField";

const DatePickerComponent = ({ label, value = "", onChange }) => {
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      type="date"
      value={value}
      onChange={handleDateChange}
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePickerComponent;
