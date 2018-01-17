/*
*使用redux 流程
* 1.定义当前项目有什么功能（常量）
*/
const increment='increment';
const decrement='decrement';
//2.定义当前项目的默认状态，状态放到reducer中
function reducer(state={number:0},action) {
    switch (action.type){//匹配动作
        case increment:
            return{number:state.number+action.amount}
    }
    return state;
}
//3.创建容器
let store=createStore(reducer);
//4.可以在外面进行派发动作
function render() {
    text.innerHTML=store.getState().number
}
reducer();
//5.订阅状态
store.subscribe(reducer);//当·状态变化时触发render函数
add.addEventListener('click',function () {
    store.dispatch({type:increment,amount:3});//修改状态
},false);