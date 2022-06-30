import React from "react";
import '../styles/button.css'

function Button(props){

    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');
        //if the three conditions get accomplished, then isOperator would be true
    };

    return (
        <div
        className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
        //With trimEnd() we eliminate the empty space at the end, because if isOperator is false, we don't want to add any extra class
    )
}


export default Button;