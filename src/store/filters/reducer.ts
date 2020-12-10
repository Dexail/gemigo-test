import {CHECKED_FILTER, FiltersActionTypes, FiltersState, IFilter} from "./type";

const initialState: IFilter[] = [
        {
            id: -1,
            value: "All",
            isChecked: false
        },
        {
            id: 0,
            value: "No transfers",
            isChecked: false
        }, {
            id: 1,
            value: "1 Transfer",
            isChecked: false
        }, {
            id: 2,
            value: "2 Transfers",
            isChecked: false
        }, {
            id: 3,
            value: "3 Transfers",
            isChecked: false
        },
    ]
const reducer = (
    state: IFilter[] = initialState,
    action: FiltersActionTypes
) => {
    switch (action.type) {
        case CHECKED_FILTER :
            debugger;
            return state.map(filter => {
                if (filter.id === action.payload)
                    filter.isChecked = !filter.isChecked;
                return filter;
            })
        default:
            return state;
    }
}

export default reducer;
