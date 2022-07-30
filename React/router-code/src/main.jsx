import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// BrowserRouter路由组件
// react-router-dom路由组件库
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>
)
