import axios from "axios";
const baseUrl = "https://api.open-meteo.com/v1/forecast?latitude=23.71&longitude=90.41&current_weather=true&timezone=auto"
const info = async () => {
    const response = await axios.get(baseUrl)
    print(response)
}

info()