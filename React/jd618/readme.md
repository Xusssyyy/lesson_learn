1. 组件思维清晰
    GoodsCard

2. api 这块封装了一下

3. 做了css reset font

4. 组件文件名可以多个单词，用横杠

5. 子组件高效结构数据，有利于提速

6. swiper 放到components/common/
    通用组件

7. antd-mobile 有些可以用的组件
    swiper 看文档

8. /public
    根目录下，静态资源目录，不需要再src 里引入
    logo , adapter.js
    直接访问到/public
    adapter.js 引入时，很干脆，直接在head 中用script 引入
    要在css 前面动态改变html fontSize   rem

    物理像素 == 2 * css 像素
    1rem == 20px