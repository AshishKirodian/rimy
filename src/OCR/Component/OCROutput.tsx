import React from 'react';

interface Props {
    scannedText: string[];
    scanningLoader: boolean;
}

export default class OCROutput extends React.Component<Props, any> {
    render() {
        let { scannedText, scanningLoader } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            Output here
                        </div>
                    </div>
                    {scanningLoader && <div className="row">
                        <div className="col-md-12">
                            Loading File... Scanning...
                        </div>
                    </div>}
                    {scannedText.length > 0 && <div className="row">
                        <div className="col-md-12">
                            {scannedText.map((text, i) =>
                                <p key={i}>{text}</p>
                            )}
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}