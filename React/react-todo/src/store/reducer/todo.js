import * as TYPE from '../action-types';

export default function reducer_todo(state = {
    maxID:0,
    taskList:[],
    flag:0//0 全部 1 已完成 2 未完成
}, action) {
    state=JSON.parse(JSON.stringify(state));

    switch (action.type){
       //增加任务
        case TYPE.TODO_ADD:
            state.maxID++;
            state.taskList.push({
                id:state.maxID++,
                title:action.title,//当用户输入完成就行增加的时候，我们执行dispatch通知管理员执行
                complete:false
            });
            break;

            //删除
        case TYPE.TODO_DEL:
               // action.id; 传递过来要删除的id
            state.taskList=state.taskList.filter(item=>{
                return item.id!==action.id
            });
            break;

            //修改
        case TYPE.TODO_SELECT:
            state.taskList=state.taskList.map(item=>{
                if(item.id===action.id){
                    item.complete=!item.complete
                }
                return item
            });
            break;

            //刷选
        case TYPE.TODO_FILTER:
            //action.flag

            state.flag=action.flag||0;
            break;
    }
    return state;
};