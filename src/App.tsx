import React from 'react'
import './App.css'
import Counter from './components/Counter'
import LocalProfile from './components/LocalProfile'
import LocalProfileMonitor from './components/LocalProfileMonitor'
import Profile from './components/Profile'

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <Profile id={35147} />
      <Counter />
      <LocalProfile />
      <LocalProfileMonitor />
    </div>
  )
}

export default App
