import { routeAPi } from "@/config/api";
import axios from "axios";
import { headers } from "../config/axios_header";


export function getProfile(user_id) {
    return axios.get(routeAPi.profil + user_id, { headers })
        .then(response => { return response })
        .catch(error => { console.error(error); })
}
