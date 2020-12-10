import {combineReducers} from 'redux';
import {default as TicketsReducer} from "./tickets/reducer";
import {default as FiltersReducer} from "./filters/reducer";

/*const tickets = {
    data:TicketsReducer
}*/

const RootReducer  = combineReducers({filters: FiltersReducer, tickets: TicketsReducer});

export default RootReducer
