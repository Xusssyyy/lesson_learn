import React,{ useState,useEffect } from 'react'
import './App.css'
import HelloComponent from './hello'
import NameEditComponent from './nameEdit'

function App() {
  const [name, setName] = useState("defaultUserName")
  const [editingName,setEditingName]=useState("defaultUserName")
  // const setUsernameState = 
  // (e:React.ChangeEvent<HTMLInputElement>)=>{
  //   setName(e.target.value)
  // }
  const setUsernameState = () => {
    setName(editingName);
  }

  const loadUsername=()=>{
    setTimeout(()=>{
      setName("name from async call");
      setEditingName("name from async call");
    },500)
  }
  useEffect(()=>{
    loadUsername()
  },[])
  
  return (
    <div className="App">
     <HelloComponent userName={name} age={18}/>
     <NameEditComponent 
      onEditingNameUpdated={setEditingName}
      initialUserName={name}
      editingName={editingName}
      onNameUpdated={setUsernameState}
      disabled={editingName==""||editingName===name}
     />
    </div>
  )
}

export default App
