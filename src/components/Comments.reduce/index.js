import React, { useContext } from "react";
import { ModalForm } from "./ModalForm";
import { TableForm } from './TableForm';
import { Provider } from './Context';
import { HeaderNotification } from './HeaderNotification';

function Comments() {

  return (
    <Provider>
      <HeaderNotification/>
      <ModalForm />
      <TableForm />
    </Provider>
  );
}
export default Comments;
