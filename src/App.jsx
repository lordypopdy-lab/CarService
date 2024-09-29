import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Diagnose from './pages/Diagnose'
import Home from './pages/Home'

function App() {
  return (
    <>
   <Router basename="/CarService/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diagnose" element={<Diagnose />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
