import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Home = () => {
  const backgroundImageUrl = "url('https://example.com/background-image.jpg')"; // Replace with your image URL

  return (
    <div
      style={{
        flexGrow: 1,
        backgroundImage: "https://images.app.goo.gl/qPfHjtNeY8TghpMZA",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          marginTop: "10rem",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Typography variant="h3" gutterBottom color="teal">
          Welcome to User Management System
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
