import React from "react";

import { Table } from "react-bootstrap";

export function TableForm({ data, handleShow, handleDelete }) {
  return (
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
  );
}
