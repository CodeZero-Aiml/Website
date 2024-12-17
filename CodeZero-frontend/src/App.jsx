import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

const App=() =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      
      </BrowserRouter>
    </div>
  )
}

export default App