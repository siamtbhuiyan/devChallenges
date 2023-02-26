import axios from "axios";

const baseUrl = 'https://apis.camillerakoto.fr/fakejobs/jobs'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const jobService = { getAll }

export default jobService
