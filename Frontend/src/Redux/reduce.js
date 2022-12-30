import { SET_DATA, SET_ERROR, SET_LOADING, SET_TOTAL_COUNT } from './actionTypes'
let initState = {
    loading : false,
    error : false,
    data : [],
    totalCount: 0
}
export const reduce = (state=initState,{type,payload}) => {
 switch (type){
    case SET_LOADING : {
        return {
         loading : true,
         error : false,
         data : [],
         totalCount :0,
        }
    }
    case SET_ERROR : {
        return {
            loading : false,
            error : true,
            data : [],
            totalCount:0
        }
    }
    case SET_TOTAL_COUNT :{
        return {
            ...state,
            totalCount : payload
        }
    }
    case SET_DATA : {
         return  {
            ...state,
            loading : false,
            error : false,
            data : payload
         }
    }
   
    default : {
        return state
    }

}
}
