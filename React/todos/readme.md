1. 目录作用
    - assets文件夹 存放资源文件
        - 自定义字体文件
        - images 图片
    - styles

2. antd 阿里的UI框架 ant蚂蚁金服
    1. Spin 方便的去做loading效果
        spinning = loading状态，tips文字提示
        加载的内容包在它里面
    2. Tabs + TabPane key + activeKey + onChange
        Tabs是容器式组件
        TabPane是子组件
        const {Tabs} = antd
        const {TabPane} = Tabs
    3. List+List.Item
        dataSource配置
        renderItem 返回每一个JSX
        classnames
    4. Icon + type属性
    5. Input
        数据绑定 onChange onPressEnter
    6. 数据的流转一定要和状态一致
        useState组件挂载 + update