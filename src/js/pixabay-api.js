import axios from "axios";


const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "50822348-bdabbbb26163a7cc5d8d36121";


function getImagesByQuery(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 40,
    });
    return axios.get(`${BASE_URL}?${searchParams}`)
    .then(response => response.data.hits);
};
export { getImagesByQuery };