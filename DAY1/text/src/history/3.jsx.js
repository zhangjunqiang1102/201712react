import React from 'react';
import ReactDom from 'react-dom';

let lessons = [
    {name: 'vue', price: 100},
    {name: 'react', price: 1000}

];

function toLesson(item) {
    return `当前库存是${item.name} 结果是${item.price}`;
}

let ele = (
    <ul>
        {lessons.map((item, index) => {
            return item.price < 1000 ? null : <li key={index}>{toLesson(item)}</li>
        })}
    </ul>
);
ReactDom.render(ele, window.root);