import styles from "./FilterBar.module.css";

function FilterBar({
    sort,
    pageSize,
    onSortChange,
    onPageSizeChange
}) {

    return (

        <div className={styles.filters}>

            <div>

                <label>Sort</label>

                <select
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value)}
                >

                    <option value="marketCapDesc">Market Cap ↓</option>
                    <option value="marketCapAsc">Market Cap ↑</option>
                    <option value="priceDesc">Price ↓</option>
                    <option value="priceAsc">Price ↑</option>
                    <option value="nameAsc">A - Z</option>
                    <option value="nameDesc">Z - A</option>

                </select>

            </div>

            <div>

                <label>Show</label>

                <select
                    value={pageSize}
                    onChange={(e) => onPageSizeChange(Number(e.target.value))}
                >

                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>

                </select>

            </div>

        </div>

    );

}

export default FilterBar;