import React, { useEffect } from "react";

import { Table, Button } from "react-bootstrap";
import { useStore } from "./store";
import shallow from "zustand/shallow";
import {HeaderNotification } from '../shared/HeaderNotification'

export function TableForm() {
  const [comments, totalRows, chars, loading,saving, error, effects] = useStore(
    state => [state.comments, state.totalRows, state.chars,
      state.loading, state.saving, state.error, state.effects],
    shallow //Reduce re renders in others components   ******
  );

  useEffect(() => {
    effects.fetchList();
  }, []);

  return (
    <>
      <HeaderNotification loading={loading} saving={saving} error={error} />
      <Button variant="primary" onClick={effects.handleModalShow}>
        + New
      </Button>
       > Example computed: Total Rows:{totalRows} / Total chars in Body: {chars}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {comments &&
            comments.map((item, index) => (
              <tr key={"item" + index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <a href="#" onClick={() => effects.handleModalShow(item)}>
                    {" "}
                    EDIT{" "}
                  </a>{" "}
                  <a href="#" onClick={() => effects.handleRemove(item.id)}>
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
