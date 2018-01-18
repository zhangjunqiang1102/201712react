import * as Types from '../action-types';

let actions = {
    addTodo(todo) {//要添加的内容

        return {type: Types.ADD_TODO, todo}
    },
    changeSelected(id) {
        return {type: Types.CHANGE_SELECTED, id}
    },
    deleteTodo(id) {
        return {type: Types.DELETE_TODO, id}
    },
    changeType(val) {
        return {type: Types.CHANGE_CURRENT_TYPE, val}
    }
};

export default actions