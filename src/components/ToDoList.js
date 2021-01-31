import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList(){
    return (
        <ul className="list-group container">
            <ToDoItem />
            <ToDoItem />
        </ul>
        
    )
}

export default ToDoList;