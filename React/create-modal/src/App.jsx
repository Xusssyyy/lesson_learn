import { useState } from 'react'
import Modal from './components/common/modal'

function App() {
  const [visible,setVisible] = useState(false)
  const onModalClose = () => {
    console.log('modal closed');
    setVisible(false)
  }
  const onModalConfirm = () => {
    console.log('modal confirm');
    setVisible(false)
  }
  return (
    <div className="App">
     <Modal 
        visible={visible}
        title="登录"
        onClose={onModalClose}
        onConfirm={onModalConfirm}
      >
        <h3>这里是自定义内容区域</h3>
        <p>!!!!!</p>
      </Modal>
     <button onClick={()=>setVisible(true)}>click here</button>
    </div>
  )
}

export default App
