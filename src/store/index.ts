import {combineReducers} from 'redux';
import ticketsReducer from "./tickets/ticketsReducer";

const RootReducer  = combineReducers({tickets: ticketsReducer});

export default RootReducer
