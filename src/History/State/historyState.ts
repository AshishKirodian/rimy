export default interface HistoryState {
    historyList: HistoryList[];
    loader: boolean;
}

export interface HistoryList {
    id: number;
    url: string;
    scannedResult: string[];
}

export function defaultHistoryList(): HistoryState {
    return {
        historyList: [],
        loader: false
    }
}