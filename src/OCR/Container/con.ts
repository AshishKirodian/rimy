import { connect } from "react-redux";
import { StoreTree } from "../../Utils/MainReducer/mainReducer";
import OCR from "../Component/OCR";
import OCRActionGenerators from "../Actions/gen";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
        scanningLoader: appState.ocr.scanningLoader,
        scannedText: appState.ocr.scannedText
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        scanImage: (image: FormData) => dispatch(OCRActionGenerators.scanImage(image))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OCR);