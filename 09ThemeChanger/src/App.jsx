import { useState } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";
import { DataContextProvider } from "./context/DataContext";
function App() {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState({
    name: "Sandeep",
    age: 22,
    address: "A-24 Sec-51,Noida",
    dob: "24/02/2002",
    college: "IGNOU College",
  });

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <DataContextProvider value={{ data, setData }}>
        <Card />
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;
