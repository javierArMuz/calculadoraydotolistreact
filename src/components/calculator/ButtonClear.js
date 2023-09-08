import React from 'react'

export default function ButtonClear(props) {
  return (
    <div className='button-clear' onClick={props.handlyClear}>
      {props.children}
    </div>
  )
}
