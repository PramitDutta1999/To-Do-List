import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function TodoItem({ task }) {
    const dispatch = useDispatch()
    const [show, setshow] = useState('none')
    const [newtask, setnewtask] = useState('')
    function deletetask(task) {
        dispatch({ type: 'DELETE_TASK', payload: task })
    }
    function edittask() {
        setshow('inline')
    }
    function finaledit(task) {
        dispatch({ type: 'EDIT_TASK', payload: { oldtask: task, newtask: newtask } })
        setshow('none')
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <h1 className='text-start'>{task}</h1>
                </div>
                <div className="col-md-1">
                    <button className='btn btn-secondary p-2' onClick={edittask}>EDIT</button>
                </div>
                <div className="col-md-1">
                    <button className='btn btn-danger p-2' onClick={() => deletetask(task)}>DELETE</button>
                </div>
                <div className="col-md-9">
                    <input type="text" style={{ display: show }} value={newtask}
                        onChange={(e) => { setnewtask(e.target.value) }} />
                    <button style={{ display: show }} className='btn btn-success m-1'
                        onClick={() => { finaledit(task) }}>FINAL EDIT</button>

                </div>
            </div>
            <hr style={{ borderColor: 'black' }} />
        </div>
    )
}
