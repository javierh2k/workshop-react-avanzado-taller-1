import React, { useState, useRef, useEffect } from "react";
import { useCrud } from "../../customHooks/useCrud";
import {
  Button,
  Alert
} from "react-bootstrap";
import { Toasts } from "./Toasts";
import { ModalForm } from "./ModalForm";
import { Notification } from "./Styles";
import { debugForm } from '../../helpers/debugForm';
import { TableForm } from './TableForm';

function Comments() {
  const {
    data, 
    save,
    model,
    remove, 
    saving,
    loading,
    error
  } = useCrud("/comments");

  const [show, setShow] = useState(false);
  // const [title, setTitle] = useState(false);
  // const [body, setBody] = useState(false);
  const formRef = useRef();
  const comment = useRef({ title:'xx', body:''});
  const handleClose = () => setShow(false);

  const handleShow = obj => {
        comment.current =  obj;
        setShow(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    save(form, model.id);
    debugForm(form);
  }

  function handleDelete(id) {
    const resp = window.confirm("¿Está seguro?");
    if (resp) {
      remove(id);
    }
  }

  return (
    <div>
      <Notification>
        <Toasts saving={saving} loading={loading} />
      </Notification>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button variant="primary" onClick={handleShow}>
        + New
      </Button>

      <ModalForm
        handleSubmit={handleSubmit}
        formRef={formRef}
        handleClose={handleClose}
        show={show}
        comment={comment.current}
      />
      <TableForm data={data}  handleShow={handleShow} handleDelete={handleDelete} comment={comment.current}   />
    </div>
  );
}
export default Comments;
