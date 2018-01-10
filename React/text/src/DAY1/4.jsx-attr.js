import React from 'react';
import {render} from 'react-dom';

/*
* 1.普通属性
* 2.特殊的属性 class for
* 3.style 必须是一个对象类型
* 4.危险的插入 innerHTML xss攻击    dangerouslySetInnerHTML
* */
let str='<h1>纯标签</h1>';
let sty1={backgroundColor:'red'};
render(<div>
    <li className='abc'></li>
    <li htmlFor="abc" style={sty1}></li>
    <li dangerouslySetInnerHTML={{__html:str}}></li>
</div>, window.root);