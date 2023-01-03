import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Edit.css";

function Edit() {
  const { id } = useParams();
  const [studentDetail, setStudentDeatail] = useState({
    names: "",
    email: "",
  });

  useEffect(() => {
    geViewStudent();
  }, []);

  function onTextFieldChange(e) {
    setStudentDeatail({
      ...studentDetail,
      [e.target.name]: e.target.value,
    });
  }

  async function geViewStudent() {
    try {
      const studentView = await axios.get(
        `http://localhost:3013/studentss/${id}`
      );
      // console.log(studentView.data);
      setStudentDeatail(studentView.data);
    } catch (error) {
      console.log("wrong");
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3013/studentss/${id}`, studentDetail);
      navigate("/");
    } catch (error) {
      console.log("Wrong");
    }
  }

  const navigate = useNavigate();
  return (
    <>
      <Box textAlign="center" p={2} mb={5} className="edit_heading">
        <Typography variant="h3">User's Data</Typography>
      </Box>
      <Grid container justify="center" spacing={4} className="edit_container">
        <Grid item md={6} xs={12} className="grid">
          <Box textAlign="center" p={2} mb={2} className="edit_sub_heading">
            <Typography variant="h5">Edit User</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  disabled
                  value={id}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="names"
                  name="names"
                  variant="outlined"
                  required
                  fullWidth
                  id="names"
                  label="Name"
                  value={studentDetail.names}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={studentDetail.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Edit;
