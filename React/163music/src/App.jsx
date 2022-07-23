import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyle,Top,TabItem } from './style' //style.js
// console.log(GlobalStyle);
// styled-compoents styled 定义一段样式
// createGlobalStyle 定义全局样式
// 并以组件的方式来返回
function App() {
  
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Top>
        <a className='selected'>
         <TabItem>
          <span>推荐</span>
         </TabItem>
        </a>
        <a>
          <TabItem>
          <span>歌手</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
          <span>排行榜</span>
          </TabItem>
        </a>
      </Top>
    </div>
  )
}

export default App
