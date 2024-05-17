import React from "react"
import { useContext } from "react";

export const TodoContext=React.createContext(
    {
    todo:[
        {  
            id:1,
            message:"ok",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    todoComplete:(id)=>{}
 }
)

export const TodoContextProvider=TodoContext.Provider;

export  function useTodo(){
    return useContext(TodoContext);  
             // This will return the data inside the todoContext
}
