import React, { useState, useEffect } from 'react'
import pingService from './services/ping'
console.log(require('dotenv').config())

function App() {
  const [reply, setReply] = useState([])

  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  console.log(
    'process.env.REACT_APP_HYSQL_SRV',
    process.env.REACT_APP_HYSQL_SRV
  )
  console.log('process.env', process.env)

  const hysqlSrv = process.env.REACT_APP_HYSQL_SRV

  useEffect(() => {
    pingService.ping(hysqlSrv).then((initReply) => {
      console.log('initReply', initReply)
      setReply(initReply)
    })
  }, [hysqlSrv])

  return (
    <div>
      <h1>Hello World!!</h1>
      ping {reply.value}
    </div>
  )
}

export default App
