const ping = async () => {
  return Promise.resolve({ value: 'PONG' })
}

export default { ping }