import React, { useState, useContext } from "react";
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
import { DataContext } from "../context/DataContext";

function UserTable() {
  const { users, setUsers } = useContext(DataContext);

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

  const handleDelete = async (user) => {
    await fetch(`https://664d82f3ede9a2b55653bf0e.mockapi.io/add/${user.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedUsers = users.filter((u) => u.id !== user.id);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error:", error));
  };

  // Handle saving edited user
  const handleSaveEditedUser = () => {
    fetch(`https://664d82f3ede9a2b55653bf0e.mockapi.io/add/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        const updatedUsers = users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        setOpenModal(false);
      })
      .catch((error) => console.error("Error:", error));
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
            sx={{ mb: 2 }}
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
            sx={{ mb: 2 }}
          />
          <TextField
            size="small"
            label="Department"
            value={editedUser ? editedUser.department : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, department: e.target.value })
            }
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            size="small"
            label="Brief"
            value={editedUser ? editedUser.brief : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, brief: e.target.value })
            }
            fullWidth
            sx={{ mb: 2 }}
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
