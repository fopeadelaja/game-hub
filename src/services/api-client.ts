import axios from "axios";

 export interface FetchResponse<T> {
    count: number;
    results: T[];

 }

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '6b16fad0c9934d468850c099d601851d'
    }
})

