import { connect } from "react-redux";
import Home from "../Component/home";
import { StoreTree } from "../../Utils/MainReducer/mainReducer";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);