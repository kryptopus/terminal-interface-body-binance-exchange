/* @flow */
import React, {Component} from "react"
import blessed from "blessed"
import {bind} from "decko"

/**
 * Sidebar
 */
export default class Sidebar extends Component<*, void> {
    items:Array<any>;

    constructor(props:any)
    {
        super(props);

        this.items = [
            {
                id: "general",
                label: "General",
            },
            {
                id: "balance",
                label: "Balance"
            }
        ];
    }

    /**
     * Render the component
     */
    render() {
        const label = "Binance account";
        const style = {
            border: {
                fg: "white"
            }
        };
        const listStyle = {
            item: {
                fg: "green"
            },
            selected: {
                bg: "blue",
                fg: "white"
            }
        };
        const labels = [];
        for (let item of this.items) {
            labels.push(item.label);
        }

        return (
            <box
                label={label}
                width={30} height="100%-2"
                border="line" style={style}
            >
                <list
                    items={labels}
                    interactive={true} keys={true}
                    style={listStyle}
                    ref={this.onRef}
                />
            </box>
        );
    }

    @bind
    onRef(list:any)
    {
        if (!list) {
            return;
        }
        list.on("select", this.select);
        list.focus();
    }

    @bind
    select(row:any, index:number)
    {
        if (typeof this.props.onSelect === "function") {
            if (index < this.items.length) {
                this.props.onSelect(this.items[index], index);
            }
        }
    }
}
