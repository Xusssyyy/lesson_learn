import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { pageTitle } from '../../config'

export default function Header(props) {
    // const {title='饿了么'}=props
    // let title = '饿了么'
    const [title,setTitle]=useState('首页')
    const {pathname="/"} = useLocation()
    useEffect(()=>{
      // const location = window.location.pathname;
      // console.log(location);
      let _title = pageTitle[pathname] || '';
      // if(pathname=='/order'){
      //   _title='订单'
      // }else if(pathname=='/'||pathname=='/home'){
      //   _title='首页'
      // }
      setTitle(_title)
    })
  return (
    <header>{title}</header>
  )
}
