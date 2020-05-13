import React, { useState, useEffect } from 'react'
import pingService from './services/ping'

function App() {
  const [reply, setReply] = useState([])

  useEffect(() => {
    pingService
      .ping()
      .then(initReply => {
        console.log('initReply', initReply)
        setReply(initReply)
      })
  }, [])

  return (
    <div>
      <h1>Hello World!!</h1>
      ping {reply.value}
    </div>
  )
}

export default App
