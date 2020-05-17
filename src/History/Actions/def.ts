import { HistoryList } from "../State/historyState";

export const GETHISTORY = 'GETHISTORY';
export type GETHISTORY = typeof GETHISTORY;
export const GETHISTORY_SUCCESS = 'GETHISTORY_SUCCESS';
export type GETHISTORY_SUCCESS = typeof GETHISTORY_SUCCESS;
export const GETHISTORY_FAILURE = 'GETHISTORY_FAILURE';
export type GETHISTORY_FAILURE = typeof GETHISTORY_FAILURE;

export const SAVERECORD = 'SAVERECORD';
export type SAVERECORD = typeof SAVERECORD;

export interface SaveRecord {
    type: SAVERECORD;
    payload: {
        imageURL: string;
        scannedText: string[];
    }
}

export interface GetHistory {
    type: GETHISTORY;
}
export interface GetHistorySuccess {
    type: GETHISTORY_SUCCESS;
    payload: {
        historyList: HistoryList[];
    }
}
export interface GetHistoryFailure {
    type: GETHISTORY_FAILURE;
}

export type historyActions = GetHistory |
GetHistoryFailure |
GetHistorySuccess |
SaveRecord;