// components/UserForm.js
import React, { useContext, useState } from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import TextFieldComponent from "./TextFieldComponent";
import DatePickerComponent from "./DatePickerComponent";
import SelectFieldComponent from "./SelectFieldComponent";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: null,
    department: "",
    brief: "",
  });
  const { setUsers, users } = useContext(DataContext);
  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target ? event.target.value : event,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // setUsers(formData);
    // const data = localStorage.getItem("users");
    // if (data != null) {
    //   let prevData = JSON.parse(data);
    //   localStorage.setItem("users", JSON.stringify([...prevData, formData]));
    // } else {
    //   localStorage.setItem("users", JSON.stringify([formData]));
    // }

    //------------------------------------------- Using MOCK API---------------------------------------------------------------

    fetch("https://664d82f3ede9a2b55653bf0e.mockapi.io/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    setUsers(users);
    navigate("/users");
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" gutterBottom>
        User Form
      </Typography>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextFieldComponent
              label="Name"
              value={formData.name}
              onChange={handleChange("name")}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePickerComponent
              label="Date of Birth"
              value={formData.dob}
              onChange={handleChange("dob")}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectFieldComponent
              label="Department"
              value={formData.department}
              onChange={handleChange("department")}
              options={[
                { value: "HR", label: "HR" },
                { value: "Engineering", label: "Engineering" },
                { value: "Marketing", label: "Marketing" },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldComponent
              label="Brief"
              value={formData.brief}
              onChange={handleChange("brief")}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default UserForm;
