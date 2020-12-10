import {createStore, compose, applyMiddleware} from 'redux';
import RootReducer from "./store/index";
import thunk from "redux-thunk";
/* eslint-disable no-underscore-dangle */

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
/* eslint-enable */

// const composeEnhancers = compose;
const store: any = createStore(
    RootReducer,
    {},
    composeEnhancers(
        applyMiddleware(
            thunk,
        )
    )
);
export default store
