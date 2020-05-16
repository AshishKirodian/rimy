import OCRState, { defaultOCRState } from "../State/OCRState";
import { OCRActions, SCANIMAGE, SCANIMAGE_SUCCESS, SCANIMAGE_FAILURE } from "../Actions/def";

export default function OCRReducer(state: OCRState = defaultOCRState(), action: OCRActions): OCRState {
    switch (action.type) {
        case SCANIMAGE: {
            return { ...state, scanningLoader: true, scannedText: [] };
        }
        case SCANIMAGE_SUCCESS: {
            return { ...state, scanningLoader: false, scannedText: action.payload.scannedText };
        }
        case SCANIMAGE_FAILURE: {
            return { ...state, scanningLoader: false };
        }
        default: return state;
    }
}