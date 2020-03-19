import React, { useContext } from "react";
import { ModalForm } from "./ModalForm";
import { TableForm } from './TableForm';

function Comments() {

  return (
    <>
      <ModalForm />
      <TableForm />
    </>
  );
}
export default Comments;
