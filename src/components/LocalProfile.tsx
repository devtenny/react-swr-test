import { useState } from 'react'
import initialStore from '../libs/store'
import useSWR, { mutate } from 'swr'

const LocalProfile = () => {
  const { data } = useSWR('globalState', { initialData: initialStore })
  const [value, setValue] = useState((data || {}).name)
  if (!data) {
    return null
  }
  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 200, marginRight: 8 }}
      />
      <button
        type="button"
        onClick={() => {
          mutate('globalState', { ...data, name: value }, false)
        }}
      >
        save
      </button>
    </div>
  )
}

export default LocalProfile
