import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props) {
    return <h1>{props.data}</h1>

}
//render 方法会被优化 只会重新渲染改变的地方 domDiff 性能较好
setInterval(()=>{
    ReactDOM.render(<Clock data={new Date().toLocaleString() }/>,window.root);
},1000);
