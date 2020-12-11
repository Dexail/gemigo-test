import {FETCH_TICKETS, TicketsActionTypes, TicketsState} from "./types";
import {ThunkAction} from "redux-thunk";

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
