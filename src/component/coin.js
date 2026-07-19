import React from 'react'
import styles from './coin.module.css'
import {formatPrice,formatMarketCap} from "../helper/format";
import { Link } from "react-router-dom"

function Coin({ id, name, image, symbol, price, marketCap, priceChange }) {

    return (
        <Link className={styles.link} to={`/coin/${id}`}>
        <div className={styles.container}>
            <div className={styles.names}>
                <img src={image} alt='name'/>          
                <div className={styles.coinInfo}>
                    <span className={styles.coinName}>{name}</span>
                    <span className={styles.symbol}>{symbol.toUpperCase()}</span>
                </div> 
            </div>
            <span>{formatPrice(price)}</span>
            <span>{formatMarketCap(marketCap)}</span>
            <span className={priceChange >= 0 ? styles.green : styles.red}>
                {priceChange.toFixed(2)}%</span>
        </div>
        </Link>
    )
}

export default Coin
