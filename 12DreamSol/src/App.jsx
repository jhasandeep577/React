import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjLayout from "./components/Layout";
import UserTable from "./components/UsersTable";
import UserForm from "./components/UserForm";
import { useEffect, useState } from "react";
import { DataContextProvider } from "./context/DataContext.js";
import Home from "./components/Home.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    await fetch("https://664d82f3ede9a2b55653bf0e.mockapi.io/add", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getData();
  }, [setUsers, users]);

  return (
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
  );
}

export default App;
