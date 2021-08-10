import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
export default function Todolist() {
    const taskobj = useSelector(store => store)
    const taskitems = taskobj.taskitems.map((task) => {
        return (
            <TodoItem task={task} />
        )
    })
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 p-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                    {taskitems}
                </div>
            </div>
        </div>
    )
}
