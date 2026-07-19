import styles from "./Skeleton.module.css";

function Skeleton() {

    return (

        <div className={styles.container}>

            {Array.from({ length: 10 }).map((_, index) => (

                <div
                    key={index}
                    className={styles.row}
                >

                    <div className={styles.coin}></div>

                    <div className={styles.price}></div>

                    <div className={styles.market}></div>

                    <div className={styles.change}></div>

                </div>

            ))}

        </div>

    );

}

export default Skeleton;