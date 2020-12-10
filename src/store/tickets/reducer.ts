import {TicketsState, TicketsActionTypes, FETCH_TICKETS, Tickets} from "./types";

const initialState: Tickets[] = []
const reducer = (
    state: Tickets[] = initialState,
    action: TicketsActionTypes
) => {
    switch (action.type) {
        case FETCH_TICKETS :
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export default reducer;
