import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TablePagination,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function UserTable() {
  const { users, setUsers } = useContext(DataContext); // Destructure to get users directly

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handlers for edit and delete actions
  const handleEdit = (user) => {
    setEditedUser(user);
    setOpenModal(true);
  };

  const handleDelete = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Handle saving edited user
  const handleSaveEditedUser = () => {
    const updatedUsers = users.map((user) =>
      user.name === editedUser.name ? editedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setOpenModal(false);
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", height: "auto", overflow: "auto" }}>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 800, mx: "auto", overflowX: "auto" }}
        elevation={6}
      >
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            p: 2,
            fontWeight: "bold",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          User Data
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#665D1E",
                  fontWeight: "Bold",
                  color: "white",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#665D1E",
                  fontWeight: "Bold",
                  color: "white",
                }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#665D1E",
                  fontWeight: "Bold",
                  color: "white",
                }}
              >
                Department
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#665D1E",
                  fontWeight: "Bold",
                  color: "white",
                }}
              >
                Brief
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#665D1E",
                  fontWeight: "Bold",
                  color: "white",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                  }}
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.dob}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.brief}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="edit"
                      onClick={() => handleEdit(user)}
                      sx={{ color: "teal" }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(user)}
                      sx={{ color: "red" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            size="small"
            label="Name"
            value={editedUser ? editedUser.name : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
            fullWidth
            sx={{ mb: 2 }} // Add margin bottom
          />
          <TextField
            size="small"
            type="date"
            label="Date of Birth"
            value={editedUser ? editedUser.dob : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, dob: e.target.value })
            }
            fullWidth
            sx={{ mb: 2 }} // Add margin bottom
          />
          <TextField
            size="small"
            type="search"
            label="Department"
            value={editedUser ? editedUser.department : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, department: e.target.value })
            }
            fullWidth
            sx={{ mb: 2 }} // Add margin bottom
          />
          <TextField
            size="small"
            label="Brief"
            value={editedUser ? editedUser.brief : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, brief: e.target.value })
            }
            fullWidth
            sx={{ mb: 2 }} // Add margin bottom
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} color="error">
            Cancel
          </Button>
          <Button onClick={handleSaveEditedUser} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default UserTable;
