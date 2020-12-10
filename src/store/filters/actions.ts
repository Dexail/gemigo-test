import {CHECKED_FILTER} from "./type";


export const checkedFilter = (idFilter:number) => ({
    type: CHECKED_FILTER,
    payload: idFilter
});
