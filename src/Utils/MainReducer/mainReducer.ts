import { combineReducers } from "redux";
import OCRState from "../../OCR/State/OCRState";
import OCRReducer from "../../OCR/Reducer/ocrReducer";
import HistoryState from "../../History/State/historyState";
import historyReducer from "../../History/Reducer/historyRed";

export interface StoreTree {
    home: any;
    ocr: OCRState;
    history: HistoryState;
}

export const mainReducer = combineReducers({
    ocr: OCRReducer,
    history: historyReducer
})