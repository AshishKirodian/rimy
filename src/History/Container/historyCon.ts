import { connect } from "react-redux";
import { StoreTree } from "../../Utils/MainReducer/mainReducer";
import History from "../Component/history";
import HistoryActionGenerator from "../Actions/gen";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
        historyList: appState.history.historyList,
        loader: appState.history.loader
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        getHistory: () => dispatch(HistoryActionGenerator.getHistory())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(History);