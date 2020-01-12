import {
    getToken
} from '../components/Authenticate/utils/sessions/sessionStorage'
import config from '../config/config'
import axios from 'axios'

const token = getToken()
let headers = {}
if (token) {
    headers = {
        'Authorization': 'Bearer ' + token
    }
}

const api = axios.create({
    baseURL: config.baseURL,
    timeout: 3000,
    headers: headers
})

export default api