import { useState } from "react";

import Context from "./Context";

function ContextState(props) {

    const [tasksList, setTasksList] = useState([
        // { id: 1, task: 'reading', status: 'completed', time: '4/23/2023, 10:56:47 PM' },
        // { id: 2, task: 'swiming', status: 'incomplete', time: '4/23/2023, 10:56:47 PM' },
        // { id: 3, task: 'class', status: 'completed', time: '4/23/2023, 10:56:47 PM' },
        // { id: 4, task: 'sports', status: 'incomplete', time: '4/23/2023, 10:56:47 PM' },
    ]);

    const [completed, setCompleted] = useState([])
    const [incomplete, setIncomplete] = useState([])
    const [all, setAll] = useState(tasksList)

    return (
        <Context.Provider value={{ tasksList, setTasksList, completed, setCompleted, incomplete, setIncomplete, all, setAll }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState