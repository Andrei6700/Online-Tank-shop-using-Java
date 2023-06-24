import React from "react"
import {Form} from "../form/Form"

function FormOrder() {
    return (
        <div className="form-order-page">
            <div style={{ display: 'flex', flexDirection: "column", paddingTop: '30%' }} >
                <h1 className="form-title" >ORDER</h1>
                <Form />
            </div>
        </div>
    )
}

export default FormOrder;

