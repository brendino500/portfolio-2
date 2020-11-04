import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </BrowserRouter>
  )
}

export default App
