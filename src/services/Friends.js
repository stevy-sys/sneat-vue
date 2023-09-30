import axios from "axios";
import { headers } from "../config/axios_header";


export function getFriendsSuggestion(url) {
    return axios.get(url, { headers })
        .then(response => { return response.data.data })
        .catch(error => { console.error(error); })
}
