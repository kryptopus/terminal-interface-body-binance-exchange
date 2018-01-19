/* @flow */
import connect from "./connect"
import Sidebar from "../component/Sidebar"
import selectSidebarItem from "../action/selectSidebarItem"

/**
 * Enhance Style component
 * Connect the component to Redux store
 */
export default connect((store, dispatch, ownProps):any => {

    return {
        onSelect: (item:any, index:number) => {
            selectSidebarItem(item);
        }
    };
})(Sidebar);
