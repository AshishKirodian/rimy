import { GetHistory, GETHISTORY, GetHistorySuccess, GETHISTORY_SUCCESS, GETHISTORY_FAILURE, GetHistoryFailure, SaveRecord, SAVERECORD } from "./def";
import { HistoryList } from "../State/historyState";

export default class HistoryActionGenerator {
    public static getHistory(): GetHistory {
        return {
            type: GETHISTORY
        }
    }
    public static getHistorySuccess(historyList: HistoryList[]): GetHistorySuccess {
        return {
            type: GETHISTORY_SUCCESS,
            payload: {
                historyList: historyList
            }
        }
    }
    public static getHistoryFailure(): GetHistoryFailure {
        return {
            type: GETHISTORY_FAILURE
        }
    }
    public static saveRecord(imageURL: string, scannedText: string[]): SaveRecord {
        return {
            type: SAVERECORD,
            payload: {
                imageURL: imageURL,
                scannedText: scannedText
            }
        }
    }
}