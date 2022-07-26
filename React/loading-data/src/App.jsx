import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPsots] = useState([])
  //jsx首屏显示不会受数据请求的阻塞
  useEffect(()=>{
    // console.log('-----');
    fetch(' http://localhost:1234/posts')
    .then(data=>data.json())
    .then(data=>{
      // console.log(data);
      setPsots(data)
    })
  },[])
  return (
    <div className="App">
      {!posts.length&&<div>当前列表为空</div>}
      {!posts.length&&posts.map(post=><li key={post.id}>{post.title}</li>)}

    </div>
  )
}

export default App
