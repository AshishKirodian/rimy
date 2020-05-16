export const SCANIMAGE = 'SCANIMAGE';
export type SCANIMAGE = typeof SCANIMAGE;
export const SCANIMAGE_SUCCESS = 'SCANIMAGE_SUCCESS';
export type SCANIMAGE_SUCCESS = typeof SCANIMAGE_SUCCESS;
export const SCANIMAGE_FAILURE = 'SCANIMAGE_FAILURE';
export type SCANIMAGE_FAILURE = typeof SCANIMAGE_FAILURE;

export interface ScanImage {
    type: SCANIMAGE;
    payload: {
        image: FormData;
    }
}

export interface ScanImageSuccess {
    type: SCANIMAGE_SUCCESS;
    payload: {
        scannedText: any[];
    }
}

export interface ScanImageFailure {
    type: SCANIMAGE_FAILURE
}

export type OCRActions = ScanImage |
    ScanImageSuccess |
    ScanImageFailure;