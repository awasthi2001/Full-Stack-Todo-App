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


export const postData = (data,page)=>async(dispatch) => {
    try {
       let res = await fetch('https://blue-mercury-3qiw.onrender.com/todos',{
           method: 'POST',
           body: JSON.stringify(data),
           headers: {
                "Content-Type" : 'application/json',
           },
       })
       dispatch(fetchAndUpdate(page))
    } catch (error) {
       console.log(error)
    }
   }
   
   export const DeleteData = (id,page)=>async(dispatch) => {
    try {
       let res = await fetch(`https://blue-mercury-3qiw.onrender.com/todos/${id}`,{
           method: 'DELETE',
       })
       dispatch(fetchAndUpdate(page));
    } catch (error) {
       console.log(error)
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