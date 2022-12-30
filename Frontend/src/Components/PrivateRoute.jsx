import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
  let{loading,error,isAuth,isregister} = useSelector(state=>state.Auth);
 if(isAuth===false){
 return <Navigate to={'/login'}/>
 }
  return children;
};

export default PrivateRoute;