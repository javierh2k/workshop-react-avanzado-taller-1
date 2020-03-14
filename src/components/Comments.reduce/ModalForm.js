import React,{useContext, useRef} from "react";

import { Form, Modal, Button, Col } from "react-bootstrap";
import { Context } from './Context';

export function ModalForm() {
  const { state:{ comment, show } , crud: { save },dispatch: { handleSubmit, handleClose } } = useContext(Context);
  const formRef = useRef();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(event)=>handleSubmit({save, event, formRef})} ref={formRef}>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                required
                type="title"
                placeholder="title"
                defaultValue={comment.title}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="body"
                required
                type="text"
                placeholder="body"
                defaultValue={comment.body}
              />
            </Form.Group>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
