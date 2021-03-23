import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counter() {
  const { data, mutate } = useCounter()

  const handleInc = () => mutate(data + 1)
  const handleDec = () => mutate(data - 1)

  return (
    <div>
      <span>count: {data}</span>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}>dec</button>
    </div>
  )
}
