import axios from 'axios';

const API_BASE_URL = 'http://your-api-server.com/api';

export const fetchProducts = async (company, category) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`, {
            params: { company, category },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
};
