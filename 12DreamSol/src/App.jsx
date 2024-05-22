import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjLayout from "./components/Layout";
import UserTable from "./components/UsersTable";
import UserForm from "./components/UserForm";
import { useEffect, useState } from "react";
import { DataContextProvider } from "./context/DataContext.js";
import Home from "./components/Home.jsx";

function App() {
  let [users, setUsers] = useState([]);

  users = localStorage.getItem("users");
  JSON.parse(users) ? (users = JSON.parse(users)) : [];

  return (
    <>
      <DataContextProvider value={{ users, setUsers }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProjLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/addUser" element={<UserForm />} />
              <Route path="/users" element={<UserTable />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </>
  );
}
export default App;
