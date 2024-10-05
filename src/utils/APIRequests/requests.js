import axios from 'axios'

const requestInstance = axios.create({
    baseURL: 'https://ssd-api.jpl.nasa.gov/',
    timeout: 3000
})

export default requestInstance