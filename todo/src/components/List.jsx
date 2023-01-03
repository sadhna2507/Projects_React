import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function List() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getAllStudent();
  }, []);

  async function getAllStudent() {
    try {
      const students = await axios.get("http://localhost:3013/studentss");
      // console.log(students.data);
      setStudent(students.data);
    } catch (error) {
      console.log("wrong");
    }
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3013/studentss/${id}`);
    var newStudent = student.filter((item) => {
      return item.id !== id;
    });
    setStudent(newStudent);
  };

  return (
    <div>
      <Box textAlign="center" p={2} mb={2} className="list_student">
        <Typography variant="h5">User's List</Typography>
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
              <TableCell
                align="center"
                className="tableHeadCell"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: " 1rem",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{student.names}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => {
                          handleDelete(student.id);
                        }}
                      >
                        <DeleteIcon color="red" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
