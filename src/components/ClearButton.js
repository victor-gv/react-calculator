import React from 'react'
import '../styles/clearButton/ClearButton.css'

function ClearButton(props) {
  return (
    <div className='clear-button'>
        {props.children}
        </div>
  )
}

export default ClearButton