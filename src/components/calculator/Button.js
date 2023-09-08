import React from 'react';
import './Calculator.css';

export default function Button(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.handlyInput(props.children)}>
      {props.children}
    </div>
  )
}
