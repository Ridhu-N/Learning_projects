import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector,useDispatch } from "react-redux";
function Updatetask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const { taskSelected } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
const updateTask = (task) =>{
  setModalShow(true);
  
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
  };
  useEffect(() => {
    if (Object.keys(taskSelected).length !== 0) {
      setId(taskSelected.id);
      setTitle(taskSelected.title);
      setDescription(taskSelected.description);
    }
  },[taskSelected]);

  return (
    <div className="container">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              <Form.Label htmlFor="tasktitle">Task Title</Form.Label>
              <Form.Control type="text" id="tasktitle" />
              <Form.Label htmlFor="taskdescription">
                Task Description
              </Form.Label>
              <Form.Control type="text" id="task description" />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Updatetask;
