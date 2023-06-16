import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import { Grid } from '@material-ui/core'
import Home from './assets/pages/Home'
import './App.css'
import Dashboard from './components/estaticos/navbar/Navbar'
import { Copyright } from '@mui/icons-material'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
