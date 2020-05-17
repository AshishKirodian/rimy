import HistoryState, { defaultHistoryList } from "../State/historyState";
import { historyActions, GETHISTORY, GETHISTORY_SUCCESS, GETHISTORY_FAILURE } from "../Actions/def";

export default function historyReducer(state: HistoryState = defaultHistoryList(), action: historyActions): HistoryState {
    switch (action.type) {
        case GETHISTORY: {
            return { ...state, loader: true };
        }
        case GETHISTORY_SUCCESS: {
            return { ...state, historyList: action.payload.historyList, loader: false };
        }
        case GETHISTORY_FAILURE: {
            return { ...state, loader: false };
        }
        default: return state;
    }
}