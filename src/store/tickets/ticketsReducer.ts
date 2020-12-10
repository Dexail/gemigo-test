import {TicketsState, TicketsActionTypes, FETCH_TICKETS} from "./types";

const initialState: TicketsState = {
    tickets: []
}
const ticketsReducer = (
    state: TicketsState = initialState,
    action: TicketsActionTypes
) => {
    switch (action.type) {
        case FETCH_TICKETS :
            return [...state.tickets, ...action.payload]
        default:
            return state;
    }
}

export default ticketsReducer;
