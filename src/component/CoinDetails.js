import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  PriceChart  from "./PriceChart";
import styles from "./CoinDetails.module.css"
import {formatPrice,formatMarketCap,formatPercentage} from "../helper/format";
import { getCoinById , getCoinHistory} from "../api/api";

function CoinDetails() {

    const { id } = useParams();

    const [coin, setCoin] = useState(null);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchCoin = async () => {
            try{
            setError("");
            const data = await getCoinById(id);
            setCoin(data);
            const historyData = await getCoinHistory(id , 7);
            setHistory(historyData);
            } catch (error) {
            if (error.response?.status === 404) {
                setError("Coin not found");
            }else {
                setError("Unable to load coin information.");
            }
            }
        }

        fetchCoin();

    }, [id]);

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

    if (!coin)
        return <h2>Loading...</h2>;

    const chartData = history.map(item => ({
    time: new Date(item.createdAt).toLocaleString([], {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }),
    price: item.price
    }));

    return (

        <div className={styles.container}>

        <div className={styles.card}>

        <img src={coin.image} alt={coin.name} />

        <h1>{coin.name}</h1>

        <span>{coin.symbol.toUpperCase()}</span>

        <div className={styles.info}>

            <p>
                <strong>Price:</strong>
                <span> {formatPrice(coin.currentPrice)}</span>
            </p>

            <p>
                <strong>Market Cap:</strong>
                <span> {formatMarketCap(coin.marketCap)}</span>
            </p>

            <p className={
                    coin.priceChangePercentage24h >= 0
                        ? styles.green
                        : styles.red }>
                {formatPercentage(coin.priceChangePercentage24h)}
            </p>

        </div>

    </div>

    <div className={styles.chartCard}>

        <h2>Price History</h2>

        <PriceChart data={chartData} />

    </div>

</div>

    );

}

export default CoinDetails;