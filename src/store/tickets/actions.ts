import {FETCH_TICKETS, HIDE_LOADER, SHOW_LOADER} from "./types";
/*type ThunkResult<R> = ThunkAction<R, TicketsState, undefined, TicketsActionTypes>;
export const fetchData = (): ThunkResult<Promise<void>> => {
    return async (dispatch) => {
        // const response = await axios.get('..')
        setTimeout(() => {
            dispatch({type: FETCH_TICKETS, payload:dataJSON.tickets})
        }, 1500)
    }
};*/
export const fetchData = () => ({
    type: FETCH_TICKETS,
});
export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}
