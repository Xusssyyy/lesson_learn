import React from 'react'
import { Input } from 'antd'
import { useState } from 'react'
const TodoInput =({placeholder,onSetQuery})=>{
    const [value,setValue] = useState("")
    const onAdd = () => {
        onSetQuery(value)
    }
    return (
        <section className='input-wrap'>
            <Input 
            onPressEnter={onAdd}
            value = {value}
            className="input"
            onChange={e => setValue(e.target.value)}
            placeholder = {placeholder}/>   
        </section>

    )
}
export default TodoInput