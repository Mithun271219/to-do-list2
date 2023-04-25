import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useFormik } from 'formik'

import Context from '../../../Context/Context';
import { Schema } from './Schema';

function Model(props) {

    let { tasksList, setTasksList, setAll } = useContext(Context);

    let initialValues = {
        id: '',
        task: '',
        status: "incomplete",
        time: ''
    }

    let { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = useFormik({
        initialValues,
        validationSchema: Schema,
        onSubmit: (values, clear) => {
            values.id = Math.floor(Math.random() * 10000)
            values.time = new Date().toLocaleString();
            setTasksList([...tasksList, values])
            setAll([...tasksList, values])
            clear.resetForm();
        }
    })

    return (
        <div >
            <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <label className='form-label' htmlFor="task">{props.message}:</label><br />
                                <input type="text" value={values.task} onChange={handleChange} onBlur={handleBlur} className='form-control' name="task" id="task" /><br />
                                {errors.task && touched.task ? <p style={{ color: "red" }}>&nbsp;*&nbsp;{errors.task}</p> : null}
                                <div className='d-flex justify-content-end gap-2'>
                                    <div className='me-auto'>
                                        <select onChange={handleChange} value={values.status} name="status" id="status" className='form-select' >
                                            <option value="incomplete" name="status">Incomplete</option>
                                            <option value="completed" name="status">Complete</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" disabled={!isValid} className="btn btn-primary" data-bs-dismiss='modal'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Model