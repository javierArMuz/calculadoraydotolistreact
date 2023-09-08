import React from 'react';
import './Calculator.css'

export default function Screen({ input }) {
  return (
    <div className='input'>
      {input}
    </div>
  )
}
