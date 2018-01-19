/* @flow */
export const SELECT_SIDEBAR_ITEM = "SELECT_SIDEBAR_ITEM";

export default (item:any) => {
    return {
        type: SELECT_SIDEBAR_ITEM,
        id: item.id
    };
};
