import React, { useState,useEffect } from "react";
import './modal.css'

/**
 * @param {visible boolean} props 控制显示
 * @return
*/

const Modal = (props) => {
    // const {visible,title,children} = props
    const [visible,setVisible] = useState(false)
    const {visible:show,title,children} = props
    const {onClose,onConfirm} = props
    console.log(visible, '------------');
    useEffect(()=>{
        setVisible(show)
    },[show])
    const closeModal = () => {
        setVisible(false)
        // onClose && onClose()
    }
    const confirm = () => {
        setVisible(false)
        // onConfirm && onConfirm()
    }
    const maskClick = () => {
        setVisible(false)
        // onClose && onClose()
    }
    return( 
       visible && <div className="modal-wrapper">
        <div className="modal">
            <div className="modal-title">{title}</div>
            <div className="modal-content">{children}</div>
            <div className="modal-operator">
                <button className="modal-operator-close" onClick={closeModal}>取消</button>
                <button className="modal-operator-confirm" onClick={confirm}>确定</button>
            </div>
        </div>
        <div className="mask" onClick={maskClick}></div>
       </div> 
    )
}
export default Modal