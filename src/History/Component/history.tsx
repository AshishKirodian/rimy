import React from 'react'
import { HistoryList } from '../State/historyState';
import Loader from '../../UniversalComponents/Loader/loader';
import { SITEAPI } from '../../Configuration/global';

interface Props {
    getHistory: () => void;
    loader: boolean;
    historyList: HistoryList[];
}

export default class History extends React.Component<Props, any> {
    componentDidMount() {
        let { getHistory } = this.props;
        getHistory();
    }
    render() {
        let { historyList, loader } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    {loader && <div className="row">
                        <div className="col-md-12">
                            <Loader />
                        </div>
                    </div>}
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div id="accordion">
                                {historyList.map((list, i) =>
                                    <div className="card" key={i}>
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    {list.url}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img className="img-fluid" src={SITEAPI + '/static/' + list.url} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        {list.scannedResult.map((text, j) =>
                                                            <p key={j}>{text}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}