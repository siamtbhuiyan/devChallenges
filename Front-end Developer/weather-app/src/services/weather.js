import axios from "axios";
const latLonUrl = `https://api.openweathermap.org/geo/1.0/direct?q=dhaka&appid=${import.meta.env.VITE_API_KEY}` 
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&appid=${import.meta.env.VITE_API_KEY}`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=23.7644025&lon=90.389015&appid=${import.meta.env.VITE_API_KEY}`

const getLatLon = async () => {
    const response = await axios.get(latLonUrl)
    return response.data
}

const getCurrent = async () => {
    const response = await axios.get(currentUrl)
    return response.data
}

const getForcast = async () => {
    const response = await axios.get(forecastUrl)
    return response.data
}

const weatherService = { getLatLon, getCurrent, getForcast }

export default weatherService
