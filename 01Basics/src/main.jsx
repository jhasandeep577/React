import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function component() {
  return (
    <>
      <App />
      <p style={{ color: "white" }}>
         Component is just a function returning jsx
      </p>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root'))
  .render(
    //  <App />    // Good practice
    component()    // we can execute it like this also but it wont work in react strict mode --- Not good practice
  )
