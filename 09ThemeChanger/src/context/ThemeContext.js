import React from "react";
export const ThemeContext=React.createContext()   
    // It will store the data and will provide to the further child components 

export const ThemeProvider=ThemeContext.Provider;
   // use this to provide data to the child componenets