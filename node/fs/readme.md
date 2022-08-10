1. os 操作系统(operation system)  fs(file system)  
    js 挺进后端开发  
    os 
2. 路径
    path  
    1. js 内存 -> fs.readFile ->I/O -> 硬盘 -> 文件 -> 读入内存

3. 读取文件 fs api
    拥有两种代码风格
    1. 同步写法
    2. 异步写法

4. 查找指定目录下的最大文件
    1. 哪个api获得目录下的内容？ readdir
    2. let maxSize = 0; 循环遍历 fs.stat 详细