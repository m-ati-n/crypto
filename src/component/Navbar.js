import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {

    return (

        <header className={styles.navbar}>
            <div className={styles.logo}>
                🪙
                <span>CryptoMarket</span>
            </div>
            <nav className={styles.links}>

                <Link to="/">Home</Link>

            </nav>
        </header>

    );

}

export default Navbar;