import React, { useState, useEffect } from 'react'
import pingService from './services/ping'
require('dotenv').config()

function App() {
  const [reply, setReply] = useState([])

  const hysqlSrv = process.env.REACT_APP_HYSQL_SRV
  console.log('NODE_ENV', process.env.NODE_ENV)
  console.log('HYSQL_SRV', hysqlSrv)

  useEffect(() => {
    pingService.ping(hysqlSrv).then((initReply) => {
      setReply(initReply)
    })
  }, [hysqlSrv])

  return (
    <div>
      <h1>HY-SQL</h1>
    </div>
  )
}
//Removed Hello World portion in favor of the sql functionality
//<h1>Hello World!!</h1>
//ping { reply.value }
export default App
