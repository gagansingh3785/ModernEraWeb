import axios from "axios"

const HELPERS = {
    request: (config) => {
        return axios
            .request(config)
            .then((resonse) => {
                return resonse
            })
            .catch((err) => {
                throw err
            })
    }
}

export default HELPERS