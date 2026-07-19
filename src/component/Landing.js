import React, { useEffect, useState } from 'react'
import { getCoin } from '../api/api'
import Coin from './coin'
import styles from './Landing.module.css'
import Skeleton from './Skeleton'
import EmptyState from "./EmptyState";
import FilterBar from "./FilterBar";

function Landing() {

    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("marketCapDesc");
    const [pageSize , setPageSize] = useState(20);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [search , setSearch] = useState('')
    const [coins , setCoins] = useState([])
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {    
        const fetchCoins = async () => {
            setLoading(true);
            try {
                setError("");
                const data = await getCoin(page, pageSize, debouncedSearch, sort);
                setCoins(data.items);
                setTotalPages(data.totalPages);
            }
            catch {
                setError("Unable to load market data.");
            }
            finally {
                setLoading(false);
            }
        }   
        fetchCoins()
    },[page, pageSize, debouncedSearch, sort])

    const searchHandler = event => {
        setSearch(event.target.value);
        setPage(1);
    }
    const handleSort = (order) => {
        setSort(order);
        setPage(1);
    }

    const handlePageSize = (size) => {
    setPageSize(size);
    setPage(1);
    }

    const pageNumbers = [];

    for (
        let i = Math.max(1, page - 2);
        i <= Math.min(totalPages, page + 2);
        i++
    ) {
        pageNumbers.push(i);
    }

    if (loading) {

    return <div className={styles.load}>
                <Skeleton />
                </div>;

    }

    if (error) {
    return (
        <div className={styles.errorContainer}>
            <h2>⚠️</h2>
            <h3>{error}</h3>
            <button onClick={() => window.location.reload()}>
                Retry
            </button>
        </div>
    );
    }

    return (
        
        <div className={styles.body}>
            <div>
                <div className={styles.hero}>
                <h1>🪙 CryptoMarket</h1>
                <p>Track cryptocurrency prices in real time.</p>
                </div>
                <input
                type="text"
                value={search}
                onChange={searchHandler}
                placeholder="🔍 Search coins..."
                className={styles.text}/>
                {(!loading && coins.length === 0) ? <EmptyState /> : 
                <div className={styles.class}>
                    <div>
                        <FilterBar
                        sort={sort}
                        pageSize={pageSize}
                        onSortChange={handleSort}
                        onPageSizeChange={handlePageSize}/>
                        <div className={styles.container}>
                            <div className={styles.contname}>
                                <span className={styles.names}>coin</span>
                                <span>price</span>
                                <span>marketCap</span>
                                <span>priceChange24h</span>
                            </div>
                            {coins.map(item => <Coin
                            key={item.coinGeckoId}
                            id={item.coinGeckoId}
                            name={item.name} 
                            image={item.image} 
                            symbol={item.symbol} 
                            price={item.currentPrice} 
                            marketCap={item.marketCap} 
                            priceChange={item.priceChangePercentage24h}/>)}
                        </div>
                            <div className={styles.pagination}>
                                <button disabled={page === 1} onClick={() => setPage(page - 1)}>←</button>
                                {pageNumbers.map(number => (
                                <button
                                    key={number}
                                    onClick={() => setPage(number)}
                                    className={page === number ? styles.activePage : ""}>{number}
                                </button>
                                ))}
                                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>→</button>
                            </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Landing