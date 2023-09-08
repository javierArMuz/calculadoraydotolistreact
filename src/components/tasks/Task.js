import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

import './Task.css';

export default function Task({ id, text, completed, toCompleteTask, deleteTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className="task-text"
        onClick={() => toCompleteTask(id)} >
        {text}
      </div>
      <div className="task-container-icon"
        onClick={() => deleteTask(id)} >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  )
}
