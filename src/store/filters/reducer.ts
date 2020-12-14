import {CHECKED_ALL_FILTER, CHECKED_FILTER, FiltersActionTypes, IFilter} from "./type";

const initialState: IFilter[] = [
    {
        id: -1,
        value: "All",
        isChecked: false
    },
    {
        id: 0,
        value: "No transfers",
        isChecked: true
    }, {
        id: 1,
        value: "1 Transfer",
        isChecked: true
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
    let checked = true
    switch (action.type) {
        case CHECKED_FILTER :
            let checkboxAll = state.find(filter => filter.id === -1)
            let result = state.map(filter => {
                if (filter.id === action.payload)
                    filter.isChecked = !filter.isChecked;
                if(!filter.isChecked && filter.id !== -1)
                    checked = false
                return filter;
            })
            if(checkboxAll)
                checkboxAll.isChecked = checked
            return result
        case CHECKED_ALL_FILTER :
            state.forEach((filter) => {
                if(filter.id === action.payload)
                    checked = !filter.isChecked
            })
            return state.map(filter => {
                filter.isChecked = checked;
                return filter;
            })
        default:
            return state;
    }
}

export default reducer;
