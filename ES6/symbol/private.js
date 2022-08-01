//立即执行函数 + 闭包
var PClass = (function(){
    var a = '私有变量';
    var getA = function(){
        console.log(a,'私有方法');
    }
    var setA = function(val){
        a = val;
    }
    //闭包区域
    function P(){
        this.b = 1;
    }
    //共享
    P.prototype = {
        //私有属性
        getType:function(type){
            if(type=='a'){
                getA()
            }
        },
        setType:function(type){
            if(type=='a'){
                setA(val)
            }
        }
    }
    return P
})()
const pclass = new PClass();
console.log(pclass.b);