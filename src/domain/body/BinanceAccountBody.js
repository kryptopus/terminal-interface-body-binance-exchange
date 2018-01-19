/* @flow */
//import {Component} from "react"
import type {BodyInterface} from "kryptopus-terminal-interface/src/domain/body/BodyInterface"
import BinanceAccount from "../screen/BinanceAccount"

/**
 * Binance account body service
 */
export default class BinanceAccountBody implements BodyInterface
{
    /**
     * Get component class
     *
     * @return  {Component}     Component class
     */
    getComponentClass():any
    {
        return BinanceAccount;
    }
}
