import { SCANIMAGE, SCANIMAGE_SUCCESS, ScanImage, ScanImageSuccess, ScanImageFailure, SCANIMAGE_FAILURE } from "./def";

export default class OCRActionGenerators {
    public static scanImage(image: FormData): ScanImage {
        return {
            type: SCANIMAGE,
            payload: {
                image: image
            }
        }
    }
    public static scanImageSuccess(scannedText: string[]): ScanImageSuccess {
        return {
            type: SCANIMAGE_SUCCESS,
            payload: {
                scannedText: scannedText
            }
        }
    }
    public static scanImageFailure(): ScanImageFailure {
        return {
            type: SCANIMAGE_FAILURE
        }
    }
}