import * as React from 'react';

import "./Checkbox.scss"

type Props = {
    id:string;
    name:string;
    changeCheckbox(id: string): void;
};
const Checkbox = ({id, name, changeCheckbox}: Props) => {
    return (
        <>
            <input type="checkbox" className="checkbox" onChange={(e)=>changeCheckbox(id)} id={id} value={name}/>
            <label htmlFor={id}>{name}</label>
        </>
    );
};

export default Checkbox
