import * as React from 'react';

import "./Checkbox.scss"

type Props = {
    id:number;
    value:string;
    isChecked: boolean;
    changeFilter(id:number):void;
};
const Checkbox = ({id, value, isChecked, changeFilter}: Props) => {
    return (
        <>
            <input type="checkbox" key={id} onClick={(e)=> changeFilter(id)} className="checkbox" checked={isChecked} id={id.toString()} name={value} value={value}/>
            <label htmlFor={id.toString()}>{value}</label>
        </>
    );
};

export default Checkbox
