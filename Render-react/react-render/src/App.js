import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Addtask from "./components/Addtask";
import Tasklist from "./components/Tasklist";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/addtask" element={<Addtask />} />
          <Route path="/tasklist" element={<Tasklist />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Addtask />
      <Tasklist />
    </div>
  );
}

export default App;
