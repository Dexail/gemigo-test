import {INIT_DATA_TICKETS, Tickets, TicketsActionTypes} from "./types";

const initialState: Tickets[] = []
const reducer = (
    state: Tickets[] = initialState,
    action: TicketsActionTypes
) => {
    switch (action.type) {
        case INIT_DATA_TICKETS :
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export default reducer;
