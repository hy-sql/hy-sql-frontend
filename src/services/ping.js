import axios from 'axios'
const baseUrl = '/api/ping'

const ping = async (hysqlSrv) => {
  var response = await axios.get(`https://hy-sql.herokuapp.com${baseUrl}`)

  return response.data
}

export default { ping }
