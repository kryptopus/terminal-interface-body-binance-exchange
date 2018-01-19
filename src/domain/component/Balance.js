/* @flow */
import React, {Component} from "react"
import blessed from "blessed"
import {Table} from "react-blessed-contrib"
import {bind} from "decko"

/**
 * Balance
 */
export default class Balance extends Component<*, void> {
    constructor(props:any)
    {
        super(props);
    }

    /**
     * Render the component
     */
    render() {
        return (
            <Table
                ref={this.onRef}
                label="Balance"
                width="100%-30"
                height="100%-2"
                left={30}
                border={{type: "line"}}
                columnWidth={[6, 20]}
                keys={true}
                interactive={true}
            >
            </Table>
        );
    }

    @bind
    onRef(table:Table)
    {
        if (!table) {
            return;
        }
        table.widget.rows.on("select", this.select);
        table.widget.rows.focus();
    }



    @bind
    select(row:any, index:number)
    {
        console.log(index);
    }
}
