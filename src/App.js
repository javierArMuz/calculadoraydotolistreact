import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Button from './components/calculator/Button';
import ButtonClear from './components/calculator/ButtonClear';
import Screen from './components/calculator/screen';
import TaskList from './components/tasks/TaskList';

function App() {

  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val)
  }

  const calculateResult = () => {
    setInput(evaluate(input))
  }

  return (
    <div className="App">
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: '2rem 0' }}>
          Calculadora & ToDoList</h1>
      </div>
      <div className="container-calculator">
        <Screen input={input} />
        <div className="row">
          <Button handlyInput={addInput}>1</Button>
          <Button handlyInput={addInput}>2</Button>
          <Button handlyInput={addInput}>3</Button>
          <Button handlyInput={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handlyInput={addInput}>4</Button>
          <Button handlyInput={addInput}>5</Button>
          <Button handlyInput={addInput}>6</Button>
          <Button handlyInput={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handlyInput={addInput}>7</Button>
          <Button handlyInput={addInput}>8</Button>
          <Button handlyInput={addInput}>9</Button>
          <Button handlyInput={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handlyInput={calculateResult}>=</Button>
          <Button handlyInput={addInput}>0</Button>
          <Button handlyInput={addInput}>.</Button>
          <Button handlyInput={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handlyClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
      <hr />
      <div className="tasks-list-main">
        <h1>Mis Tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
