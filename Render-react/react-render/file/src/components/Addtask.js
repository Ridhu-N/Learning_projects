import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addTasktoList } from "../slices/taskSlice";
import { useDispatch } from "react-redux";

function Addtask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    dispatch(addTasktoList({ title, description }));
    setTitle("")
    setDescription("")
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "bold", color: "blue" }}>
                Task Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "bold", color: "blue" }}>
                Task Description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <div style={{ float: "right" }}>
              <Button 
                style={{
                  backgroundColor: "blue",
                  border: "none",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Add Task
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Addtask;
