import {CHECKED_ALL_FILTER, CHECKED_FILTER, RESET_FILTER} from "./type";

export const checkedFilter = (id:number) => ({
    type: CHECKED_FILTER,
    payload: id
});

export const checkedAllFilter = (id:number) => ({
    type: CHECKED_ALL_FILTER,
    payload: id
});


export const resetFilter = () => ({
    type: RESET_FILTER,
});
