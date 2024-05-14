import axios from "axios";
import { renderToReadableStream } from "react-dom/server";

const API_URL = "http://loacalhost:5000";

export const getGenres = async () => {
    try{
        const response = await axios.get(API_URL + "/genres");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};