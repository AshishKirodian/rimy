export default interface OCRState {
    scannedText: string[];
    scanningLoader: boolean;
    failureMessage: string;
}

export function defaultOCRState(): OCRState {
    return {
        scannedText: [],
        scanningLoader: false,
        failureMessage: ''
    }
}

// export interface BoundingPoly {

// }