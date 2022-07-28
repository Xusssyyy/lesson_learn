import React,{ChangeEvent, useState} from "react";

interface Props{
    initialUserName:string;
    editingName:string;
    onNameUpdated:()=>any;
    onEditingNameUpdated:(newEditingName:string)=>any;
    disabled:boolean;
}

const NameEditComponent:React.FC<Props>=(props)=>{
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        props.onEditingNameUpdated(e.target.value)
    }
    const onNameSubmit=()=>{
        props.onNameUpdated()
    }
    return(
        <>
        <label>Updated name:</label>
        <input value={props.editingName} 
        onChange={onChange}/>
        <button 
        disabled={props.disabled}
        onClick={onNameSubmit}>Change</button>
        </>
    )
}

export default NameEditComponent