import HELPERS from "../utils/helper";

const baseURL = "http://moderneraweb.com:8090/"

const API_MANAGER = {
    sendMessage: (data) => {
        return HELPERS.request({
            baseURL,
            url: "email/send",
            method: "POST",
            data: data,
            headers: { "Content-Type": "application/json"}
        })
    }
}

export default API_MANAGER