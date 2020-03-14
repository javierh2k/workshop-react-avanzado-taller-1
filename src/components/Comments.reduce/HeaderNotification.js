import React, { useContext } from "react";

import { Notification } from "./Styles";
import { Toasts } from "./Toasts";
import {
    Alert
  } from "react-bootstrap";
  import { Context } from './Context';

export function HeaderNotification(){
    const { crud: { saving, loading, error } } = useContext(Context);

    return (
        <>
           <Notification>
                <Toasts saving={saving} loading={loading} />
            </Notification>

            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}