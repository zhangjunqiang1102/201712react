import * as Types from '../action-types'
function counter(state={num:100},action) {
    switch (action.type){
        case Types.INCREMENT:
            return {num:state.num+action.count};

        case Types.ADD_TODO:
            return {num:state.num+action.count}
    }
   return state
}

export default counter