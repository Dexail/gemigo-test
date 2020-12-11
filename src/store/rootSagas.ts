import {all} from 'redux-saga/effects'
import {sagaWatcher} from "./tickets/sagas";

export default function* rootSagas() {
    yield all([
        sagaWatcher()
    ])
}
