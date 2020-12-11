import {HIDE_LOADER, INIT_DATA_TICKETS, SHOW_LOADER, TicketsActionTypes, TicketsState} from "./types";

const initialState: TicketsState = {
    isLoading: true,
    data: []
}
const reducer = (
    state: TicketsState = initialState,
    action: TicketsActionTypes
) => {
    switch (action.type) {
        case INIT_DATA_TICKETS :
            return {...state, data: [...action.payload]}
        case SHOW_LOADER :
            return {...state, isLoading: true}
        case HIDE_LOADER :
            return {...state, isLoading: false}
        default:
            return state;
    }
}

export default reducer;
