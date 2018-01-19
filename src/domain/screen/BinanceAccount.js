/* @flow */
import React, {Component} from "react"
import {Provider} from "react-redux"
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import asyncAwaitMiddleware from "redux-async-await"
import thunkMiddleware from "redux-thunk"
import binance from "binance"

// Components
import Sidebar from "../container/Sidebar"

// Reducers
import balanceReducer from "../reducer/balance"
import selectedItemIdReducer from "../reducer/selectedItemId"

/**
 * Binance account
 */
export default class BinanceAccount extends Component<*, void> {
    store:any;
    binanceREST:any;
    binanceWS:any;

    constructor(props:any)
    {
        super(props);


        const exchange = props.exchange;
        const configuration = exchange.getConfiguration();
        const apiKey = configuration.api_key;
        const apiSecret = configuration.api_secret;
        this.binanceREST = new binance.BinanceRest({
            key: apiKey,
            secret: apiSecret,
            timeout: 15000,
            recvWindow: 10000,
            disableBeautification: false
        });
        this.binanceWS = new binance.BinanceWS(true);

        this.store = createStore(
            combineReducers({
                exchange:       () => { return exchange; },
                binanceREST:    () => { return this.binanceREST; },
                binanceWS:      () => { return this.binanceWS; },
                balance:        balanceReducer,
                selectedItemId: selectedItemIdReducer,
            }),
            applyMiddleware(asyncAwaitMiddleware, thunkMiddleware)
        );
    }


    /**
     * Render the component
     */
    render() {
        return (
            <Provider store={this.store}>
                <element>
                    <Sidebar/>
                </element>
            </Provider>
        );
    }
}
