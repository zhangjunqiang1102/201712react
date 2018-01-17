/*
function createStore(r) {
    let state; //此时默认还是undefined
    function dispatch(action) { //派发
        state = r(state,action);
        listeners.forEach(item=>item());
    }
    let listeners = [];// 存放所有的监听函数
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{ //取消绑定的函数，调用可以删除函数
            listeners = listeners.filter(item=>item!==fn);
        }
    };
    dispatch({});//目的是用用户的状态覆盖掉自身的状态
    let getState = () => JSON.parse(JSON.stringify(state));
    return {getState,dispatch,subscribe}
}
export {createStore}*/
function createStore(reducer) {//render 是外界传入的，
    let state; //默认是undefined
    let getState = () => {
        return JSON.parse(JSON.stringify(state))
    };
    let listeners = [];
    let subscribe = (fn) => {
        listeners.push(fn);
        return function () {
            listeners = listeners.filter(item => item != fn);
        }
    };
    let dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(item => item())
    };
    dispatch({});//初始化redux默认状态
    return {getState, subscribe, dispatch}
}
export {createStore}
