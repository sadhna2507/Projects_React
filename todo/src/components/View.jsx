import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function View() {
  const { id } = useParams();

  const [studentView, setStudentView] = useState([]);

  useEffect(() => {
    geViewStudent();
  }, []);
  async function geViewStudent() {
    try {
      const studentView = await axios.get(
        `http://localhost:3013/studentss/${id}`
      );
      // console.log(studentView.data);
      setStudentView(studentView.data);
    } catch (error) {
      console.log("wrong");
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <Box textAlign="center" p={2} className="list_student">
        <Typography variant="h4">Student Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell
                align="center"
                className="tableHeadCell"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: " 1rem",
                }}
              >
                No.
              </TableCell>
              <TableCell
                align="center"
                className="tableHeadCell"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: " 1rem",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                className="tableHeadCell"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: " 1rem",
                }}
              >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{studentView.id}</TableCell>
              <TableCell align="center">{studentView.names}</TableCell>
              <TableCell align="center">{studentView.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </>
  );
}

export default View;
