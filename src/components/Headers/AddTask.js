import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Model from './AddingTask/Model';

function AddTask() {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add" >Add task</button>
            <Model id='add' title='Add Task' message='Task title' />
        </>
    )
}

export default AddTask