import React, { useState, useRef } from "react";
import { useCrud } from "../../customHooks/useCrud";
import {
  Table,
  Form,
  Modal,
  Button,
  Col,
  Toast,
  Spinner
} from "react-bootstrap";

function Posts() {
  const { data, save, model, remove, saving, loading } = useCrud(
    "/posts"
  );
  const [show, setShow] = useState(false);
  const formRef = useRef();
  const post = useRef({ title:'', author: ''});
  const handleClose = () => setShow(false);
  const handleShow = obj => {
        post.current = obj;
        setShow(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    save(form, model.id);
  }

  function handleDelete(id) {
    const resp = window.confirm("¿Está seguro?");
    if (resp) {
      remove(id);
    }
  }

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0
        }}
      >
        {loading && (
          <Toast show={loading}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Cargando...</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: "center" }}>
              <Spinner animation="border" />
            </Toast.Body>
          </Toast>
        )}

        {saving && (
          <Toast show={saving}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Guardando...</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: "center" }}>
              <Spinner animation="border" />{" "}
            </Toast.Body>
          </Toast>
        )}
      </div>

      <Button variant="primary" onClick={handleShow}>
        + New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  required
                  type="title"
                  placeholder="title"
                  defaultValue={post.current.title}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  name="author"
                  required
                  type="text"
                  placeholder="author"
                   defaultValue={post.current.author}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={"item" + index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <a href="#" onClick={() => handleShow(item)}>
                    {" "}
                    EDIT{" "}
                  </a>{" "}
                  <a href="#" onClick={() => handleDelete(item.id)}>
                    {" "}
                    X{" "}
                  </a>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Posts;
