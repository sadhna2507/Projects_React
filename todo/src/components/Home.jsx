import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

import "./Home.css";
import List from "./List";

function Home() {
  const [studentData, setStudentData] = useState({
    names: "",
    email: "",
  });

  const [status, setStatus] = useState();
  function onTextFieldChange(e) {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3013/studentss`, studentData);
      setStatus(true);
    } catch (error) {
      console.log("Wrong");
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box textAlign="center" className="head_box">
        <Typography variant="h3">Database</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12} className="grid">
          <Box textAlign="center" p={2} mb={2} className="add_student">
            <Typography variant="h5">Add User</Typography>
          </Box>
          <form noValidate>
            <Grid contaier spacing={2}>
              <Grid item xs={12} spacing={2} >
                <TextField
                  autoComplete="names"
                  name="names"
                  variant="outlined"
                  required
                  fullWidth
                  id="names"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} mt={4}>
                <TextField
                  autoComplete="email"
                  
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
