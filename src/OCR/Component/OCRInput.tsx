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
        let element = document.getElementById('file-upload');
        if (!isNullOrUndefined(element)) {
            let file = (element as any).files[0];
            var formData = new FormData();
            formData.append("file", file);
            console.log(file);
            // this.setState({selectedImage:  URL.createObjectURL(file)});
            scanImage(formData);
        }
    }
    previewImage(e: any) {
        this.setState({selectedImage: URL.createObjectURL(e.target.files[0])})
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            Click below to upload a file
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <input onChange={(e) => this.previewImage(e)} id="file-upload" type="file" placeholder="file" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <button onClick={() => this.submitFile()}>Scan it!</button>
                        </div>
                    </div>
                    {this.state.selectedImage.length > 0 && <div className="row">
                        <div className="col-md-12">
                            <img  className="img-fluid" src={this.state.selectedImage} />
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}