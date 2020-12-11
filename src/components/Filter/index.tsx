import * as React from 'react';
import "./Filter.scss";
import {Checkbox} from "../index";
import {IFilter} from "../../store/filters/type";

type Props = {
    filters: IFilter[],
    disabled: boolean,
    changeFilter(id: number): void
};
const Filter = ({filters, changeFilter, disabled}: Props) => {
    return (
        <div className="transfers__filter">
            <h2>Number of transfers</h2>
            <div className="transfers__filter-list">
                {filters.length > 0 ?
                    (filters.map((filter, index) => {
                        return (<Checkbox disabled={disabled} changeFilter={changeFilter} {...filter}/>)
                    }))
                    :
                    (<p>KCD</p>)
                }
            </div>
        </div>
    )
}

export default Filter
