import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

function PriceChart({ data }) {

    return (

        <ResponsiveContainer width="100%" height={400}>

            <LineChart data={data}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time" />

                <YAxis
                    domain={['auto', 'auto']}
                />

                <Tooltip />

                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#f7931a"
                    strokeWidth={2}
                    dot={false}
                />

            </LineChart>

        </ResponsiveContainer>

    );

}

export default PriceChart;