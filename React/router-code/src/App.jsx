import { useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  

  return (
    <div className="App">
     {/* 路由的配置 */}
     <nav>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>

     </nav>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
     </Routes>
    </div>
  )
}

export default App
