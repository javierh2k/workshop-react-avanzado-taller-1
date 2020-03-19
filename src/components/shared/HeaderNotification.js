import React from "react";

import { Notification } from "./Styles";
import { Toasts } from "./Toasts";
import {
    Alert
  } from "react-bootstrap";

export function HeaderNotification({loading, saving, error}){
    return (
        <>
           <Notification>
                <Toasts saving={saving} loading={loading} />
            </Notification>

            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}