import axios from "axios";

const BASE_URL = "https://localhost:7093/api/coins";

const getCoin = async (
    page = 1,
    pageSize = 20,
    search = "",
    sort = "marketCapDesc"
) => {
    const response = await axios.get(BASE_URL , {
        params: {
            page,
            pageSize,
            search,
            sort
        }
    });
    console.log(response.data);
    return response.data;
}

const getCoinHistory = async (id, days = 7) => {

    const response = await axios.get(
        `${BASE_URL}/${id}/history`,
        {
            params: {
                days
            }
        }
    );
    return response.data;
};

const getCoinById = async (coinGeckoId) => {

    const response = await axios.get(
        `${BASE_URL}/id`,
        {
            params: {
                id: coinGeckoId
            }
        }
    );

    return response.data;

};

export {getCoin , getCoinHistory , getCoinById};