import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdDelete } from 'react-icons/md'

import Context from '../../Context/Context';

function Body(props) {

    let { tasksList, setTasksList, all, setAll } = useContext(Context);

    function handeChange(e) {
        let taskWithIndex = tasksList[e];
        taskWithIndex.status === 'completed' ? taskWithIndex.status = 'incomplete' : taskWithIndex.status = 'completed'
        setTasksList([...tasksList])
        setAll(tasksList)
    }

    function handelDelete(id) {
        tasksList.splice(id, 1)
        setTasksList([...tasksList])
        setAll(tasksList)
    }

    return (
        <>
            {all.length > 0 ?

                <table className='table table-hover table-striped'>
                    <thead >
                        <tr>
                            <th>Check</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all.map((task, index) => {
                                return (
                                    <tr key={task.id}>
                                        <td>
                                            <input className='form-check-input' checked={task.status === 'completed' ? true : false} type="checkbox" onChange={() => handeChange(index)} name="status" id={index} ids={task.id} />
                                        </td>
                                        <td>
                                            {task.status === 'completed' ? <h6><s>{task.task}</s></h6> : <h6><span>{task.task}</span></h6>}
                                            <div style={{ fontSize: 'smaller' }}>{task.time}</div>
                                        </td>
                                        <td>{task.status === 'completed' ? <s>{task.status}</s> : <span>{task.status}</span>}</td>
                                        <td><button className='btn' onClick={() => handelDelete(index)} ids={task.id}><span><MdDelete /></span></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                <div > <h4>No Tasks</h4></div>
            }
        </>
    )
}

export default Body