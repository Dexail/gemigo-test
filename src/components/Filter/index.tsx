import * as React from 'react';
import "./Filter.scss";
import {Button, Checkbox} from "../index";
import {IFilter} from "../../store/filters/type";

type Props = {
    filters: IFilter[],
    disabled: boolean,
    changeFilter: (id: number) => void,
    filterTickets: (id?: number) => void
};
const Filter = ({filters, changeFilter, disabled, filterTickets}: Props) => {
    return (
        <div className="transfers__filter">
            <h2>Number of transfers</h2>
            <div className="transfers__filter-list">
                {filters.length > 0 ?
                    (filters.map((filter) => {
                        return (
                            <div key={filter.id}>
                                <Checkbox disabled={disabled} changeFilter={changeFilter} {...filter}/>
                                {filter.id !== -1 ? (<Button key={filter.id} title="Only" clickButton={filterTickets}disabled={disabled} value={filter.id}/>):(<></>)}
                            </div>
                        )
                    }))
                    :
                    (<p>Empty list</p>)
                }
            </div>
        </div>
    )
}

export default Filter
