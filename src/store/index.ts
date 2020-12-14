import {combineReducers} from 'redux';
import TicketsReducer from "./tickets/reducer";
import FiltersReducer from "./filters/reducer";

const RootReducer  = combineReducers({filters: FiltersReducer, tickets: TicketsReducer});

export default RootReducer
