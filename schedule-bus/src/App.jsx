import React,{ useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import {TirolRes} from './pages/TirolRes';
import {ResTir} from './pages/ResTir';
import {Navbar} from './components/NavBar';
import {Footer} from './components/Footer';
import { Maps } from './pages/Maps';
import "./styles/styles.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<TirolRes/>}/>
          <Route path='/res' element={<ResTir/>}/>
      </Routes>
      <Maps/>
      <Footer/>
    </div>
  )
}

export default App
