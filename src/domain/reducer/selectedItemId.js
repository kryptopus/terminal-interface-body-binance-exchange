/* @flow */
import {SELECT_SIDEBAR_ITEM} from "../action/selectSidebarItem"

/**
 * Reducer of the selected item ID
 *
 * @param   {string}    state   Sidebar item ID
 * @param   {any}       action  Action
 * @return  {string}            New state
 */
export default (state:string = "", action:any) => {
    switch (action.type) {
        case SELECT_SIDEBAR_ITEM:
            return action.id;
    }
    return state;
}

