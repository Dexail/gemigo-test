import * as React from 'react';
import "./Button.scss"

type Props = {
    title: string;
    value:number;
    clickButton: (id:number) => void;
    disabled:boolean,
};
const Checkbox = ({title, value, clickButton, disabled = false}: Props) => {
    return (
        <button  className={`${disabled ? "disabled" : ""}`} disabled={disabled} onClick={(e)=> clickButton(value)}>{title}</button>
    );
};

export default Checkbox
