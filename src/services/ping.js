import axios from 'axios'
const baseUrl = '/api/ping'

const ping = async (hysqlSrv) => {
  const response = await axios.get(`${hysqlSrv}${baseUrl}`)
  return response.data
}

export default { ping }
