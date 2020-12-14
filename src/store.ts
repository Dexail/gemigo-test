import {createStore, compose, applyMiddleware, StoreCreator} from 'redux';
import RootReducer from "./store/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./store/rootSagas";
/* eslint-disable no-underscore-dangle */

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
/* eslint-enable */

const saga = createSagaMiddleware()

const store: any = createStore(
    RootReducer,
    {},
    composeEnhancers(
        applyMiddleware(
            thunk,
            saga,
        )
    )
);

saga.run(rootSagas)
export default store
