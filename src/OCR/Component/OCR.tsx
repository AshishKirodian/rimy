import React from 'react';
import OCRInput from './OCRInput';
import OCROutput from './OCROutput';
import Loader from '../../UniversalComponents/Loader/loader';

interface Props {
    scanImage: (image: FormData) => void;
    scannedText: string[];
    scanningLoader: boolean;
    failureMessage: string;
}

export default class OCR extends React.Component<Props, any> {
    render() {
        let { scanImage, scannedText, scanningLoader, failureMessage } = this.props;
        return (
            <div className="row">
                <div className=" offset-md-1 col-md-10">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2>Optical Character Recognition<sub>Google Vision</sub></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <OCRInput scanImage={scanImage} />
                        </div>
                        <div className="offset-md-2 col-md-5">
                            <OCROutput failureMessage={failureMessage} scannedText={scannedText} scanningLoader={scanningLoader} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}