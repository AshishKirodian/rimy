import React from 'react';
import { isNullOrUndefined } from 'util';

interface Props {
    scanImage: (image: FormData) => void;
}
interface State {
    selectedImage: string;
}

export default class OCRInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedImage: ''
        }
    }
    submitFile() {
        let { scanImage } = this.props;
        let { selectedImage } = this.state;
        let element = document.getElementById('file-upload');
        if (!isNullOrUndefined(element)) {
            let file = (element as any).files[0];
            var formData = new FormData();
            formData.append("file", file);
            scanImage(formData);
        }
    }
    clearFile() {
        this.setState({ selectedImage: '' });
        let element = document.getElementById('file-upload');
        if (!isNullOrUndefined(element)) {
            (element as any).value = '';
        }
    }
    previewImage(e: any) {
        this.setState({ selectedImage: URL.createObjectURL(e.target.files[0]) })
    }
    invokeHiddenButton() {
        let element = document.getElementById('file-upload');
        if (!isNullOrUndefined(element)) {
            element.click();
        }
    }
    render() {
        let { selectedImage } = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 card">
                            <div className="row">
                                <div className="col-md-12 card-body" id="boundary-common">
                                    {selectedImage.length > 0 &&
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img className="img-fluid" src={selectedImage} />
                                            </div>
                                        </div>}
                                    <div className="row">
                                        <div  className="col-md-12 text-center" style={{ visibility: this.state.selectedImage.length > 0 ? 'hidden' : 'visible' }}>
                                            <input style={{ visibility: 'hidden' }} className="btn" onChange={(e) => this.previewImage(e)} id="file-upload" type="file" placeholder="file" />
                                            <button id="upload-button" className="btn" onClick={() => this.invokeHiddenButton()}>Upload file</button>
                                        </div>
                                    </div>
                                    {selectedImage.length > 0 && <div className="row">
                                        <div className="col-md-6 mt-2 text-center">
                                            <button id="scan-button" className="btn btn-success" onClick={() => this.submitFile()}>Scan it!</button>
                                        </div>
                                        <div className="col-md-6 mt-2 text-center">
                                            <button className="btn btn-default" id="reset-button" onClick={() => this.clearFile()}>Reset</button>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}