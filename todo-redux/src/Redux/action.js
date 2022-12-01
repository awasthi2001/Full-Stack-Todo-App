import { SET_DATA, SET_ERROR, SET_LOADING } from "./actionTypes"

export const setloading = ()=>{
    return {
        type : SET_LOADING
    }
}
export const seterror = ()=>{
    return {
        type : SET_ERROR
    }
}
export const setdata = (payload)=>{
    return {
        type : SET_DATA,
        payload :payload
    }
}

export const fetchAndUpdate =(page)=>async(dispatch)=>{
try {
    dispatch(setloading());
    let res = await fetch(`https://blue-mercury-3qiw.onrender.com/todos?_limit=5&_page=${page}`);
    let res2 = await res.json();
    dispatch(setdata(res2));
} catch (error) {
    dispatch(seterror);
}
}