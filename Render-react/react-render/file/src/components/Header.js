import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
function Header() {
  const {taskList} = useSelector((state) => state.tasks); //important statement
  return (
    <div>
      <div
        className="container d-flex justify-content-center"
        style={{ textAlign: "center" }}
      >
        <div className="row">
          <div className="col">
            <h2 style={{ color: "blue" }}>Task Management</h2>
            {`Currently, ${taskList.length} task(s) pending`}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
