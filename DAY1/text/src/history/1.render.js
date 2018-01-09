import React from 'react';
import {render} from 'react-dom';
/*
 react有两部分组成，一个叫react包，react-dom，语法都是es6
 import语法要放置到页面最顶部
 ReactDOM中就一个方法比较常用 叫render

 react元素,JSX元素  javascript+xml html也是xml的一种 javascript+html
 jsx html部分和原生html"基本"一样，不是完全一样
 jsx是一个语法糖 最后会通过babel进行转义 React.createElement写法
*  react 有两部分组成，一个是react包，react-dom 语法es6
*
* import 语法要设置到页面最顶部
* ReactDOM中就一个方法比较常用，render
* */

/*
 *render(React.createElement(
  'h1',
  { className: 'red' },
  '\u7AE0\uFF0C',
  React.createElement(
    'span',
    { id: 'handsome' },
    '\u5E05\u54E5'
  )
), document.getElementById('root'));
 *
 * react 元素，JSX元素 javascript+xml html+xml的一种 javascript+html
 * jsx html 部分和原生html基本一样 不是完成一样
 *
 * // 最终会转化成一个对象"虚拟dom" {type:'h1',props:{className:"red"，children:[章，{type:'span',props:{id:'handsome',children:'帅哥'}]}}
1.先将jsx转化成react元素
2.将react元素变成一个对象
3.通过render方法渲染出一个对象
*/
//
// function ReactElement(type, props) {
//     this.type = type;
//     this.props = props;
// }

function createElement(type, props, ...children) {
    if (children.length === 1) children = children[0];
    return{type, props:{...props, children: children}}
}

let myRender = (obj, container) => {
    let {type,props} = obj;
    let ele = document.createElement(type);
    for (let key in props) {
        if (key === 'children') {
            if (typeof props[key] === 'object') {
                props[key].forEach(item => {
                    if (typeof  item === 'object') {
                        myRender(item, ele);
                    } else {
                        ele.appendChild(document.createTextNode(item));
                    }
                })


            } else { // 一个的化直接插入到h1中
                ele.appendChild(document.createTextNode(props[key]));
            }
        }
        else if (key === 'className') {
            ele.setAttribute('class', props[key]);
        }
        else {
            ele.setAttribute(key, props[key]);
        }
    }

    container.appendChild(ele);// 将元素插入到页面中
};
myRender(createElement(
    'h1',
    {className: 'red'},
    '章,',
    createElement(
        'span',
        {id: 'handsome'},
        '帅哥'
    )
), document.getElementById('root'));