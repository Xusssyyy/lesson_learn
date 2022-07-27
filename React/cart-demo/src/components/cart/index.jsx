import React, {useState, useEffect} from 'react'
import './index.css'
import { List, Typography } from 'antd'
import CartItem from './CartItem'

const Cart = () => {
    const [cartData, setCartData] = useState(Array(5)
        .fill(undefined)
        .map((v, i) => ({
            id: i,
            name: `商品${i}`,
            checked: false,
            price: Math.round(Math.random() * 100)
        }))
    )
    const [total, setTotal] = useState(0)
    const [checkedAll, setCheckedAll] = useState(false)
    const onCheckedChange = (item) => {
        // console.log(item,'-----');
        // item -> 改变
        // setData 传一个数组
        // map
        let idx = cartData.findIndex(data=>item.id==data.id)
        // console.log(idx);
        cartData[idx].checked = !cartData[idx].checked
        setCartData([
            ...cartData
        ])
    }
    const onWrapCheckedAllChange = () => {
        // setCheckedAll(!checkedAll)
        let newData = cartData.map(item=>{
            item.checked = !checkedAll
            return item
        })
        setCartData([
            ...newData
        ])
    }
    useEffect(() => {
        // mounted
        // update 
        // console.log('?????');
        let totalPrice = cartData
            .filter(item=>item.checked)
            .reduce((prev,item)=>{
                return prev + item.price
            },0)
            setTotal(totalPrice)
            
            setCheckedAll(cartData.every((item)=>item.checked))
    }, [cartData])
    const Footer = (
        <div className="footer">
            <div className="check-all">
                <input 
                    checked={checkedAll}
                    type="checkbox" 
                    onChange={onWrapCheckedAllChange}
                />
                全选
            </div>
            <div>
                价格总计<Typography.Text mark>${total}</Typography.Text>
            </div>
        </div>
    )
    return (
        <div className="cart">
            <List 
                header={<div>购物车</div>}
                footer={Footer} 
                bordered
                dataSource={cartData}
                renderItem={item => {
                    return (
                        <List.Item>
                            <CartItem 
                                item={item} 
                                onCheckedChange={onCheckedChange}/>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default Cart