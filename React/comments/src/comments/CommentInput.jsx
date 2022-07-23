import React, { useState } from 'react';
import {InputWrapper} from './comment.style'
function CommentInput() {
    // 状态 
    const [username, setUsername] = useState(''); 
    const [content, setContent] = useState(''); 
    const handleSubmit = () => {
        const comment = {
            username,
            content
        }
        console.log(comment,'-----');
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleContentChange = (event) => {
        setContent(event.target.value)
    }
    return (
        <InputWrapper>
            <div className="comment-field">
                <span className="comment-field-name">用户名：</span>
                <div className="comment-field-input">
                    {/* 数据驱动的界面 表单和其他不一样 它是要交互的
                    状态绑定了表单
                    表单输入也可以同步到状态之中
                    双向绑定
                    React不支持双向绑定，只支持单向数据绑定 */}
                    <input type="text" value={username} onChange={handleUsernameChange}/>
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容：</span>
                <div className="comment-field-input">
                    <textarea value={content} onChange={handleContentChange}></textarea>
                </div>
            </div>
            <div className="comment-field-button">
                <button onClick={handleSubmit}>
                    发布
                </button>
            </div>
        </InputWrapper>
    )
}

export default CommentInput