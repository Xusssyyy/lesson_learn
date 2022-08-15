# 电商界面开发
- html css js 位置的意义
    1. HTML+css 完成静态页面的显示  越快越好  
        css 放到head HTML+css运行 并行 下载和执行  
        - 下载HTML DOM树
        - 下载css
        css 不会阻塞HTML继续下载，css尽可能放到上面head
    2. js为什么放到尾部  
        下载过程中，会阻塞HTML的下载  
        如果放在头部，则会等js部分完全下载并执行完才会恢复HTML下载  
    3. script标签设置defer标签，则不会影响后续DOM的渲染
- defer
    1. 异步  下载HTML，不会影响后续DOM的渲染
    2. 多个script  加载顺序和文件的大小有关  
        defer确保执行的顺序和标签的顺序一致
    3. defer脚本会在文档渲染完毕（静态页面）后，DOMContentLoaded事件调用执行
- js事件 分不同的时期等级
    1. DOM0事件 onload onclick 事件里包含on
    2. DOM2事件 addEventListener('click',callback);
- 组件化思维
    1. 引入weui框架，加速且方便开发
    2. 打造项目可复用的组件 weui-mark
    3. 通用业务样式 特定项目 可能跨组件或样式功能  
        .bg_green  .f_sm{font-size:12px;}小号字体  .fr{float:right;}

- 组件化思维是良好的编程习惯
    
    