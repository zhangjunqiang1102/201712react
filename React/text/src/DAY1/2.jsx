import React from 'react'
import ReactDom from 'react-dom';
/*
*  jsx 元素->react.create
* */
let str = 'zz';
// 1.在react中想将js当作变了引入到jsx中需要使用{}
// 2.在jsx中,相邻的两个jsx元素 渲染时需要外面包裹着一层元素
// 3.{}取值表达式  取的是有返回值的结果
// 4.如果多个元素想在return 后面换行我们需要加一个()当作整体返回
// 5.<{来判断当前是js还是html
function build(str) {
    return (
    <div>
        <h1>{str}</h1>
        <h1>{str}</h1>
  </div>)
}

let el = <div>{build('zzz')}</div>;
ReactDom.render(el, document.getElementById('root'));