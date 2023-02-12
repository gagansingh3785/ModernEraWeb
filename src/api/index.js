import HELPERS from "../utils/helper";

const baseURL = "http://35.184.96.94:3002/"

const API_MANAGER = {
    sendMessage: (data) => {
        return HELPERS.request({
            baseURL,
            url: "send_message",
            method: "POST",
            data: data,
            headers: { "Content-Type": "application/json"}
        })
    }
}

export default API_MANAGER