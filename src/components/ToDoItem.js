import React from 'react'

function ToDoItem(){
    return (
      <li class="list-group-item list-group-item-dark">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
             <input type="checkbox" aria-label="Checkbox for following text input"></input>
            </div>
           </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
          </div>
      </li>    
    )
}

export default ToDoItem;