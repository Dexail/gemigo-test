import * as React from 'react';
import "./Filter.scss";
import {Checkbox} from "../index";


interface IFilter {
    id: number;
    value: string;
    isChecked: boolean
}

type Props = {
    filters: IFilter[],
    changeFilter(id:number):void
};
const Filter = ({filters,changeFilter}: Props) => {
    return (
        <div className="transfers__filter">
            <h2>Number of transfers</h2>
            <div className="transfers__filter-list">
                {filters.length > 0 ?
                    (filters.map((filter, index) => {
                        return (
                            <div>
                                <Checkbox changeFilter={changeFilter} {...filter}
                                />
                            </div>
                        )
                    }))
                    :
                    (<p>KCD</p>)
                }
            </div>
        </div>
    );
};

export default Filter
