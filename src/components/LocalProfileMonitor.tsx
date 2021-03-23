import React from 'react'
import useSWR from 'swr'
import initialStore from '../libs/store'

const LocalProfileMonitor = () => {
  const { data } = useSWR('globalState', { initialData: initialStore })
  if (!data) {
    return null
  }
  return (
    <div style={{ border: '1px solid #ddd', marginTop: 30, padding: 20 }}>
      <h1>
        Another Component: <br />
        My name is {data.name}.
      </h1>
    </div>
  )
}

export default LocalProfileMonitor
