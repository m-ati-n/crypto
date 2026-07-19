import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {

    return (

        <div className={styles.container}>

            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>The page you are looking for doesn't exist.</p>

            <Link to="/">
                Go Back Home
            </Link>

        </div>

    );

}

export default NotFound;