import axios from "axios";
import { routeAPi } from "../config/api";
import { headers } from "../config/axios_header";





export function getAllActualite(url) {
    return axios.get(url = routeAPi.getAcualite,{headers})
            .then(response => {return response.data})
            .catch(error => { console.error(error);})
}
