import styles from "./EmptyState.module.css";

function EmptyState() {

    return (

        <div className={styles.container}>

            <h2>🔍</h2>

            <h3>No coins found</h3>

            <p>Try another keyword.</p>

        </div>

    );

}

export default EmptyState;