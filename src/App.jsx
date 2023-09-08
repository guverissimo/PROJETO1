import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './componentes/Nav'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Produtos from './componentes/Produtos'
import Sobre from './componentes/Sobre'

function App() {
  return (
    <>
    <div className='main-container'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Produtos' element={<Produtos/>} />
          <Route path='/Sobre' element={<Sobre/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
      
    </>
  )
}

export default App
