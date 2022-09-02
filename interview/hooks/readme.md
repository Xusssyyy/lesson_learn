- 函数式编程的代表
- class组件和函数式组件有什么区别
    1. react自从16版本后推出了函数式组件
    2. 类似组件已是过去式，没有怎么关注
    3. 类似组件缺点是为了面向对象而面向对象，很多代码浪费。
       函数式组件简单高效 return JSX 就是函数式组件 + 一些列的hooks函数高效完成相应功能
       - 类式组件代码量多，继承react.component类、render方法、this.state，componentDidMount生命周期等，是函数式编程2倍代码量
       - 函数式组件 返回JSX就是组件，还有丰富且灵活的hooks函数完成工作
       - react编程进入函数式编程的世界
       - hooks底层其实就是封装，闭包，高阶函数

        cosnt Demo = () =>{
            const [name,setName]=useState('阿雷')
            useEffect(()=>{
                setName('阿三')
            }，[])
            return (
                 <ul>
                    <li>{name}</li>
                 </ul>
            )
        }

        class Demo extends React.Component{
            constructor(){
                this.state={
                    name:'阿雷'
                }
            }
            componentDidMount(){
                this.setState({
                    ...this.state,
                    name:'阿三'
                })
            }
            render(){
                return (
                    <ul>
                        <li>{this.state.name}</li>
                    </ul>
                )
            }
        }

- 假接口 用过mock吗
    - 前后端分离
        前端需要在真实接口到达前用假接口先顶一下
        接口文档
    - fastmock 好用 可视化，跨域
    - node 自己写 简单的
        自己解决跨域
        restful Method + url
        结合mysql可以复杂
    - mockjs