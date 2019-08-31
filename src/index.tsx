import React from 'react'
import { render } from 'react-dom'

import RemConverter from './components/RemConverter'

import './styles.css'

function App() {
  return (
    <div className="App">
      <RemConverter />
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
