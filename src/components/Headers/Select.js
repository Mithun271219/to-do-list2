import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Context from '../../Context/Context';

function Select() {

    let { tasksList, setAll } = useContext(Context);


    function handelChange(e) {
        let value = e.target.value
        if (value === 'completed') {
            let completedItems = tasksList.filter((ele) => {
                if (ele.status === value) { return ele }
            })
            setAll(completedItems)
        } else if (value === 'incomplete') {
            let incompleteItems = tasksList.filter((ele) => {
                if (ele.status === value) { return ele }
            })
            setAll(incompleteItems)
        } else {
            setAll(tasksList)
        }
    }

    return (
        <div>
            <select defaultValue={'all'} onChange={handelChange} className='form-select' name="status" id="">
                <option value="all" >All</option>
                <option value="incomplete" >Incomplete</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}

export default Select