import React, { useContext } from "react";
import {NavLink} from 'react-router-dom'
let links = [
  {
    path: '/',
    title: 'Home',
  },{
    path: '/login',
    title: 'Login',
  },{
    path : '/signUp',
    title : 'Register',
  }
]
const Navbar = () => {
  // const {token,isAuth} = useContext(AuthContext);
  return <div >
    {/* <div>
    {
      isAuth ? `TOKEN :  ${token}` : ''
    }
    </div> */}
    <div
    style={{
      display:'flex',
      justifyContent: 'flex-end',
      backgroundColor : 'black',
      color : 'white',
      padding : '20px',
      margin : '0'
    }} >
 {
  links.map(({path,title})=>{
    return <NavLink  style={{
      marginLeft: '40px',
      marginRight: '40px',
      fontSize : '20px'
    }} key={path} to={path} end>{title}</NavLink>
  })
 }
 </div>
  </div>;
};

export default Navbar;