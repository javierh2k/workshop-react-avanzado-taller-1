import React,{useContext} from "react";

import { Table, Button } from "react-bootstrap";
import { Context } from './Context';

export function TableForm() {
  const { crud: { data, remove } , dispatch: { handleShow, handleDelete } } = useContext(Context);
  
  // function handleDelete(remove,id){
  //   const resp = window.confirm("¿Está seguro?");
  //   if (resp) {
  //       remove(id);
  //   }
  // }
  
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        + New
      </Button>

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
              <td>{item.body}</td>
              <td>
                <a href="#" onClick={() => handleShow(item) }>
                  {" "}
                  EDIT{" "}
                </a>{" "}
                <a href="#" onClick={() => handleDelete({remove, id: item.id})}>
                  {" "}
                  X{" "}
                </a>{" "}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    </>
  );
}
