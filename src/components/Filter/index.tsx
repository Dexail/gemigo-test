import * as React from 'react';
import "./Filter.scss";
import {Checkbox} from "../index";


interface IFilter {
    id: number;
    name: string;
}

type Props = {};
const Filter = (props: Props) => {
    const filterList: Array<IFilter> = [
        {
            id: -1,
            name: "All"
        },
        {
            id: 0,
            name: "No transfers"
        }, {
            id: 1,
            name: "1 Transfer"
        }, {
            id: 2,
            name: "2 Transfers"
        }, {
            id: 3,
            name: "3 Transfers"
        },
    ]
    const change = (id: string): void => {
        console.log(id)
    }
    return (
        <div className="transfers__filter">
            <h2>Number of transfers</h2>
            <div className="transfers__filter-list">
                {filterList.length > 0 ?
                    (filterList.map((filter, index) => {
                        return (
                            <div>
                                <Checkbox
                                    id={filter.id.toString()}
                                    name={filter.name}
                                    changeCheckbox={change}
                                    key={filter.id}
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
