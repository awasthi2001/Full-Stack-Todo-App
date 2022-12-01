import React from 'react'
import { SET_DATA, SET_ERROR, SET_LOADING } from './actionTypes'
let initState = {
    loading : false,
    error : false,
    data : []
}
export const reduce = (state=initState,{type,payload}) => {
 switch (type){
    case SET_LOADING : {
        return {
         loading : true,
         error : false,
         data : []
        }
    }
    case SET_ERROR : {
        return {
            loading : false,
            error : true,
            data : []
        }
    }
    case SET_DATA : {
         return  {
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
