import * as React from 'react';
import "./Checkbox.scss"

type Props = {
    id:number;
    value:string;
    isChecked: boolean;
    changeFilter: (id:number) => void;
    disabled:boolean,
};
const Checkbox = ({id, value, isChecked, changeFilter, disabled = false}: Props) => {
    return (
        <div className={`${disabled ? "disabled" : ""}`}>
            <input type="checkbox" key={id} disabled={disabled} onClick={(e)=> changeFilter(id)} className="checkbox" checked={isChecked} id={id.toString()} name={value} value={value}/>
            <label htmlFor={id.toString()}>{value}</label>
        </div>
    );
};

export default Checkbox
