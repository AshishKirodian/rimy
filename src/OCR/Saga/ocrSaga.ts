import { ScanImage, SCANIMAGE } from "../Actions/def";
import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import OCRAPI from "../Actions/API";
import { SITEAPI } from "../../Configuration/global";
import OCRActionGenerators from "../Actions/gen";

function* scanImage(action: ScanImage) {
    let url = SITEAPI + '/ocr/scan'
    let image = action.payload.image;
    try {
        let response = yield call(OCRAPI.scanImage, url, image);
        switch(response.status) {
            case 200: {
                let parsed = response.data.queryResult[0];
                let scannedTextArray = parsed.description.split('\n');
                yield put(OCRActionGenerators.scanImageSuccess(scannedTextArray))
                break;
            }
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* OCRWatcher() {
    yield all([
        takeLatest(SCANIMAGE, scanImage)
    ]);
}