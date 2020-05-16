import { combineReducers } from "redux";
import OCRState from "../../OCR/State/OCRState";
import OCRReducer from "../../OCR/Reducer/ocrReducer";

export interface StoreTree {
    home: any;
    ocr: OCRState;
}

export const mainReducer = combineReducers({
    ocr: OCRReducer
})