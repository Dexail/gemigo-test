import {FETCH_TICKETS, TicketsActionTypes, TicketsState} from "./types";
import {ThunkAction} from "redux-thunk";
import dataJSON from "../../data.json"
import axios from "axios"

/*export function fetchData(newTickets: Tickets): TicketsActionTypes  {
    return {
        type: GET_TICKETS,
        payload: newTickets
    }
}*/
type ThunkResult<R> = ThunkAction<R, TicketsState, undefined, TicketsActionTypes>;

export const fetchData = (): ThunkResult<Promise<void>> => {
    return async (dispatch) => {
        // const response = await axios.get('..')
        setTimeout(() => {
            dispatch({type: FETCH_TICKETS, payload:dataJSON.tickets})
        }, 1500)
    }
};
