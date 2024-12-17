import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Meet from './components/Meet'

const App=() =>{
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Meet />
      </BrowserRouter>
    </div>
  )
}

export default App