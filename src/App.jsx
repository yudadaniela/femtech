import { useState } from 'react'
import Navbar from './NavbarComponent'
import Home from './components/Home'
import { Apoyo } from './components/Apoyo'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'
import Evento from './components/Evento'
import Talento from './components/Talento'

function App() {

  return (
    <>
     <Navbar/>

     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/apoyo' element={<Apoyo/>}></Route>
     <Route path='/networking' element={<Talento/>}></Route>
     <Route path='/eventos' element={<Evento/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />

    </>
  )
}

export default App
