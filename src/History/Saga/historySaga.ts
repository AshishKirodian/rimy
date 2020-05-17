import { GetHistory, GETHISTORY, SaveRecord, SAVERECORD } from "../Actions/def";
import { SITEAPI } from "../../Configuration/global";
import HistoryActionGenerator from "../Actions/gen";
import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import HistoryAPI from "../Actions/API";
import { HistoryList } from "../State/historyState";

function* saveRecord(action: SaveRecord) {
    
    try {
        let imageURL = action.payload.imageURL;
        let scannedText = action.payload.scannedText.join(',');
        let url = SITEAPI + '/history/save'
        yield call(HistoryAPI.saveRecord, url, { imageURL, scannedText});
    } catch(e) {
        // do nothing;
    }
}

function* getAll(action: GetHistory) {
    let url = SITEAPI + '/gethistory/all';
    try {
        let response = yield call(HistoryAPI.getHistory, url);
        switch (response.status) {
            case 200: {
                let parsed = response.data.queryResult as HistoryList[];
                yield put(HistoryActionGenerator.getHistorySuccess(parsed));
                break;
            }
            default: {
                yield put(HistoryActionGenerator.getHistoryFailure());
            }
        }
    } catch(e) {
        yield put(HistoryActionGenerator.getHistoryFailure());
    }
}

export default function* historyWatcher() {
    yield all([
        takeLatest(GETHISTORY, getAll),
        takeLatest(SAVERECORD, saveRecord)
    ])
}