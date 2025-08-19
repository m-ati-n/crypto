import React, { useEffect, useState } from 'react'
import { getCoin } from '../api/api'
import spinner from '../gif/spinner.gif'
import Coin from './coin'
import styles from './Landing.module.css'

function Landing() {

    const [search , setSearch] = useState('')
    const [coins , setCoins] = useState([])
    const fil = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


    useEffect(() => {
        const fetch = async () => {
            setCoins(await getCoin())
        }

        fetch()
    },[])

    const searchHadler = event => {
        setSearch(event.target.value)
    }

    return (
        <>
            <input type='text' value={search} onChange={searchHadler} placeholder='search...' className={styles.text}/>
            <div className={styles.class}>
                { coins.length ?
                <div className={styles.container}>
                    <div className={styles.contname}>
                    <span className={styles.names}>coin</span>
                    <span>price</span>
                    <span>marketCap</span>
                    <span>priceChange24h</span>
                    </div>
                 {fil.map(item => <Coin
                    key={item.id}
                    name={item.name} 
                    image={item.image} 
                    symbol={item.symbol} 
                    price={item.current_price} 
                    marketCap={item.market_cap} 
                    priceChange={item.price_change_percentage_24h}/>)}
                    </div>
                     :
                <div className={styles.load}>
                <img src={spinner} alt='load'/>
                <span>Loading ...</span>
                </div>
                }
            </div>
        </>
    )
}

export default Landing
