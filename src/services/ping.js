import axios from 'axios'
const baseUrl = '/api/ping'

const ping = async () => {
  const response = await axios.get(`${baseUrl}`)
  return response.data
}

export default { ping }