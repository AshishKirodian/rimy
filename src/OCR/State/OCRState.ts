export default interface OCRState {
    scannedText: string[];
    scanningLoader: boolean;
}

export function defaultOCRState(): OCRState {
    return {
        scannedText: [],
        scanningLoader: false
    }
}

// export interface BoundingPoly {

// }