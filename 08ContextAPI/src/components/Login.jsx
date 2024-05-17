import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  // It is returning a stateSetter method from UserContextProvider why ?

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
