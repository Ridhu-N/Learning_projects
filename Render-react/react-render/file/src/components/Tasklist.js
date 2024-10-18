import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Updatetask from "./Updatetask";
import { useSelector } from "react-redux";
function Tasklist() {
  const [modalShow, setModalShow] = React.useState(false);
  const { taskList } = useSelector((state) => state.tasks);
  const updateTask = (task) => {
    setModalShow(true);
   dispatch(setTaskSelected(task));

  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 mt-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {taskList &&
                taskList.map((task, idx) => (
                  <tr key={task.id}>
                    <td>{idx + 1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                      <Button
                        variant="primary "
                        style={{ marginRight: "5px" }}
                        onClick={() => setModalShow(true)}
                      >
                        <PencilSquare />
                      </Button>
                      <Button variant="primary ">
                        <Trash3Fill />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Updatetask show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Tasklist;
