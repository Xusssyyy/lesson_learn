import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import classnames from 'classnames'
import WeUI from 'react-weui'
const {
  Toast
} = WeUI

function App() {
  const [list,setList] = useState([])
  const [tab, setTab] = useState('all')
  const [showLoading, setShowLoading] = useState(false)
  const tabClasses = ['item']

  useEffect(() => {
    setTimeout(() => {
      setTab('dj')
      
    }, 2000)
  })
  useEffect(() => {
    // console.log('----------||||-------')
    setShowLoading(true)
    fetch()
    .then()
    // setTabClasses([
    //   ...tabClasses,
    //   'current'
    // ])
    // tabClasses.push('current')
    // console.log(tabClasses)
  }, [tab])
  useEffect(()=>{
    
  })
  return (
    <div className="App">
      <a href="#" className={classnames('item', {current:tab == 'all'})}>全部</a>
      <Toast  icon="success-no-circle" show={showLoading}>加载中...</Toast>
    </div>
  )
}

export default App
