import axios from "axios";

const baseUrl = 'https://apis.camillerakoto.fr/fakejobs/jobs'

const getJobs = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const jobService = { getJobs }

export default jobService
