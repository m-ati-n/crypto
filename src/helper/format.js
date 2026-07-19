export const formatPrice = (price) => {

    if (price == null) return "-";

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    }).format(price);

};

export const formatPercentage = (value) => {

    if (value == null) return "-";

    return `${value.toFixed(2)}%`;

};

export const formatMarketCap = (value) => {

    if (!value) return "-";

    if (value >= 1_000_000_000_000)
        return `$${(value / 1_000_000_000_000).toFixed(2)}T`;

    if (value >= 1_000_000_000)
        return `$${(value / 1_000_000_000).toFixed(2)}B`;

    if (value >= 1_000_000)
        return `$${(value / 1_000_000).toFixed(2)}M`;

    return `$${value.toLocaleString()}`;

};