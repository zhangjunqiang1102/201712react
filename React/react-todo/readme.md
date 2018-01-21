### 一.当前项目需要做的事情

- 添加新任务
- 展示任务
  + 默认展示全部的任务
  + 点击已完成或者未完成，还可以展示对应的任务
  
- 删除任务
- 控制每一个任务的完成状态切换
- ...
  
## 二、 技术栈 redux 和 react-redux开发
> 规划redux容器中需要层次那些公用的信息
- 任务列表(taskList)
  + 分析talkList
  ```
  
  
  ```

- 刷选状态 (已完成 1/ 未完成 2/全部 0  flag)



===========

redux 容器，存储的状态信息
{
   todo:{
      maxID:0,
        taskList:[],
        flag:0//0 全部 1 已完成 2 未完成
   }
}

action-creator
action 

```
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

```