import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import sum from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// var a=parseInt(prompt("a"));
// var b=parseInt(prompt('b'));

// class DemoClassComponent extends React.Component {
//   render() {
//   //  return(
    
//   //  );
//   }
// }
// function Parentheses() {
//   return <h1> React My First function</h1>;
// }
// const Sub=()=>{
//   return (5-2)
// }

root.render(
  <React.StrictMode>
    <App />
    {/* <Parentheses />
    <sum />
    <Sub />
    <DemoClassComponent /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
