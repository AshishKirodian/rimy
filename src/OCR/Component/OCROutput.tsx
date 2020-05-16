import React from 'react';
import Loader from '../../UniversalComponents/Loader/loader';

interface Props {
    scannedText: string[];
    scanningLoader: boolean;
    failureMessage: string;
}

export default class OCROutput extends React.Component<Props, any> {
    render() {
        let { scannedText, failureMessage, scanningLoader } = this.props;
        return (
            <div className="row">
                <div className="col-md-12 card" id="boundary-common" >
                    {failureMessage.length > 0 && <div className="row">
                        <div className="col-md-12 text-center" style={{ color: 'red' }}>
                            {failureMessage}
                        </div>
                    </div>}
                    {scanningLoader && <div className="row">
                        <div className="col-md-12">
                            <Loader/>
                        </div>
                    </div>}
                    <div className="row">
                        <div className="col-md-12" >
                            {scannedText.length > 0 && <div className="row">
                                <div className="col-md-12 card-body" id="output-text">
                                    {scannedText.map((text, i) =>
                                        <p key={i}>{text}</p>
                                    )}
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}