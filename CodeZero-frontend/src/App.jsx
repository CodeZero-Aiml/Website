import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Meet from './components/Meet'
import Footer from './components/Footer'
import Discussion from './Pages/discussion'
import Achievements from './Pages/Achievements'

const App=() =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path='/'
            element={<>
            <Hero />
            <About />
            <Meet />
            </>}
          />
          
          <Route
            path='/discussion'
            element={<Discussion/>}
          />

          <Route
            path='/achievement'
            element={<Achievements/>}
          />
        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App