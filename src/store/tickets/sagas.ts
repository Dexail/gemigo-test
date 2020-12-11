import {takeEvery, put, call, delay, all} from 'redux-saga/effects'
import axios from "axios"
import {FETCH_TICKETS, INIT_DATA_TICKETS} from "./types";
import dataJSON from "../../data.json"

export function* sagaWatcher() {
    yield takeEvery(FETCH_TICKETS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield delay(3000)
        const payload = yield call(fetchPosts)
        yield put({type: INIT_DATA_TICKETS, payload})
    } catch (e) {
    }
}

async function fetchPosts() {
    // const response = await axios.get('')
    const response = dataJSON
    return response.tickets
}
