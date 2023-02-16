import axios from "axios";
const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=Dhaka&days=3&aqi=no&alerts=no`
const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const weatherService = { getAll }

export default weatherService
