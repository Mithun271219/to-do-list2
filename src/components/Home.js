import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import AddTask from './Headers/AddTask';
import Body from './Body/Body'
import ToDoList from './Headers/ToDoList';
import Select from './Headers/Select';

function Home() {

    return (
        <>
            <div className="container">
                <div className="row align-items-center vh-100">
                    <div className="col-10 mx-auto">
                        <div className="card shadow-lg border-start">
                            <div className='card-header '>
                                <div className="d-flex justify-content-around">
                                    <div><AddTask /></div>
                                    <div className='card-title'><ToDoList /></div>
                                    <div><Select /></div>
                                </div>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <Body />
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home