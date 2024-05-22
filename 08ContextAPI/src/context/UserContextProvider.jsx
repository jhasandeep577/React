import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  // what is children ?
  // These are the children components whenever UserContextProvider is used..

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* And it also has a property called value to get and set data */}
      {/* createContext() method returned Object ....  which has a method provider() */}
      {children}
      {/* value will be passed to the children components */}
    </UserContext.Provider>
  );
}
