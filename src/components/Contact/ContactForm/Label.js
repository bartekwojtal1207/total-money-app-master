import React, {Component} from 'react';

const Label = (props) => {
    return (
        <label htmlFor={props.forLabel} className={props.classLabel}>{props.children}</label>
    )
};

export default Label