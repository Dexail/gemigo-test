import {takeEvery, put, call, delay} from 'redux-saga/effects'
import {FETCH_TICKETS, INIT_DATA_TICKETS} from "./types";
import dataJSON from "../../data.json"
import {hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(FETCH_TICKETS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        yield delay(1300)
        const payload = yield call(fetchPosts)
        yield put({type: INIT_DATA_TICKETS, payload})
        yield put(hideLoader())
    } catch (e) {
    }
}

async function fetchPosts() {
    // const response = await axios.get('')
    const response = dataJSON
    return response.tickets
}
