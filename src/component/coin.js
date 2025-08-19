import React from 'react'
import styles from './coin.module.css'

function Coin({ name, image, symbol, price, marketCap, priceChange }) {

    return (
        <div className={styles.container}>
            <div className={styles.names}>
                <img src={image} alt='name'/>
                <div>{name} {symbol}</div>
            </div>
            <span>$ {price}</span>
            <span className={priceChange > 0 ? styles.green : styles.red}>% {priceChange.toFixed(2)}</span>
            <span>$ {marketCap}</span>
        </div>
    )
}

export default Coin
