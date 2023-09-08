import React, { useState } from 'react';
import './Task.css';
// Genera un Id
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm(props) {

  const [input, setInput] = useState('')

  const handlyChange = e => {
    setInput(e.target.value)
    // console.log(e.target.value);
  }

  const handlySend = e => {
    e.preventDefault();
    // console.log('enviando...');
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    // console.log(newTask);
    props.onSubmit(newTask);
  }


  return (
    <form className='task-form'
      onSubmit={handlySend} >
      <input type="text"
        className='task-input'
        placeholder='Escribe una tarea'
        name='text'
        onChange={handlyChange} />
      <button className='task-button'>Agregar tarea</button>
    </form>
  )
}
