import axios from "axios";
const latLonUrl = `https://api.openweathermap.org/geo/1.0/direct?limit=4&` 
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?`

const getLatLon = async (currentLocation) => {
    const response = await axios.get(`${latLonUrl}q=${currentLocation}&appid=${import.meta.env.VITE_API_KEY}`)
    return response.data
}

const getCurrent = async (lat, lon) => {
    const response = await axios.get(`${currentUrl}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    return response.data
}

const getForcast = async (lat, lon) => {
    const response = await axios.get(`${forecastUrl}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    return response.data
}

const weatherService = { getLatLon, getCurrent, getForcast }

export default weatherService
