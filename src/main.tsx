import React from 'react'
import ReactDOM from 'react-dom/'
import App from './App.tsx'
import './index.css'
import Home from './assets/pages/Home.tsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
