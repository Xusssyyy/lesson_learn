// .jsx->.tsx
// interface接口
import * as React from 'react'
// 定义一个接口
// 子组件需要实现Props规定的接口属性和方法
// ts就是语法能力面向对象的能力更牛逼
// ts可以和java一样
// 接口定义区域
interface Props{
    userName:string;
    age:number;
}
// 接口和组件结合 组件要实现接口
// props?{ }   被认为是空对象
// 在FC后加个泛型<>，泛指内部需要的类型
// React.FC类型定义由@types/react提供
const HelloComponent:React.FC<Props>=(props)=>{
    return (
        <h2>
            hello user:{props.userName}!
            <br />
            年纪：{props.age}!
        </h2>
    )
}
export default HelloComponent