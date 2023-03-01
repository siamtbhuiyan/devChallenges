import axios from "axios";

const baseUrl = 'https://apis.camillerakoto.fr/fakejobs/jobs'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getFullTime = async () => {
    const response = await axios.get(`${baseUrl}?fulltime=true`)
    return response.data
}

const getCities = async () => {
    const response = await axios.get(baseUrl)
    let temp = response.data
    temp = temp.map(t => t.city)
    temp = [...new Set(temp)]
    return temp
}

const jobService = { getAll, getCities, getFullTime }

export default jobService
