import React from 'react';

import {
    Toast,
    Spinner
  } from "react-bootstrap";

export function Toasts({loading, saving}){

    return (
        <React.Fragment>
        {loading && (
            <Toast show={loading}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Loading...</strong>
              </Toast.Header>
              <Toast.Body style={{ textAlign: "center" }}>
                <Spinner animation="border" />
              </Toast.Body>
            </Toast>
          )}
  
          {saving && (
            <Toast show={saving} style={{background: 'red'}} variant="primary">
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Saving...</strong>
              </Toast.Header>
              <Toast.Body style={{ textAlign: "center" }}>
                <Spinner variant="light" animation="border" />{" "}
              </Toast.Body>
            </Toast>
          )}
        
        </React.Fragment>
    )
}