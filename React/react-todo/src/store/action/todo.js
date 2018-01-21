import * as TYPE from '../action-types';

//此处封装的是dispatch时候具体传递的action对象  action-creator
export default {
    add(title) {
        return {
            type: TYPE.TODO_ADD,
            title
        }
    },
    del: id => ({
        type: TYPE.TODO_DEL,
        id
    }),

    select: id => ({
        type: TYPE.TODO_SELECT,
        id
    }),
    filter: flag => ({
        type: TYPE.TODO_FILTER,
        flag
    })

};
