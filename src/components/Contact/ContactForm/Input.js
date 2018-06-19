import React, { Component } from 'react';

const Input = (props) => {
    return (
        <input key={props.index}
               type={props.type}
               name={props.name}
               className={props.classInput}
               id={props.name}
               onChange={props.change}
               onClick={props.click}
               required />
    )
};

export default Input;