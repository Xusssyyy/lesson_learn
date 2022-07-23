import React from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// import './comment.css'; 传统的样式布局
import { Wrapper } from './comment.style';

// import styled from 'styled-components'
// //样式组件 组件的样式，都有相应的组件来实现
// const Wrapper = styled.div`
//     width: 500px;
//     margin: 10px auto;
//     font-size: 14px;
//     background-color: #fff;
//     border: 10px solid #f1f1f1;
//     padding: 20px;
// `

function CommentApp(){
    return (
        // 传统样式布局添加类名
        // <div className='wrapper'>CommentAPP
        //     <CommentInput />
        //     <CommentList />
        // </div>
        <Wrapper>
            CommentApp
            <CommentInput />
            <CommentList />
        </Wrapper>
    )
}
export default CommentApp