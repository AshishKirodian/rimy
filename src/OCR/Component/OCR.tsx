import React from 'react';
import OCRInput from './OCRInput';
import OCROutput from './OCROutput';

interface Props {
    scanImage: (image: FormData) => void;
    scannedText: string[];
    scanningLoader: boolean;
}

export default class OCR extends React.Component<Props, any> {
    // componentDidMount() {
    //     let { scanImage } = this.props;
    //     scanImage('');
    // }
    render() {
        let { scanImage, scannedText, scanningLoader } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <OCRInput scanImage={scanImage} />
                    </div>
                    <div className="col-md-6">
                        <OCROutput scannedText={scannedText} scanningLoader={scanningLoader} />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}