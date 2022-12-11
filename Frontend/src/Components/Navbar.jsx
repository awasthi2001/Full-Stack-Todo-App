import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setisAuth } from "../Redux/AuthRedux/action";
import { AccountDrawer } from "./AccounDrawer";
import axios from "axios";
let links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/login",
    title: "Login",
  },
  {
    path: "/signUp",
    title: "Register",
  },
];
const Navbar = () => {
  let { isAuth } = useSelector((state) => state.Auth);
  const {isOpen,onOpen,onClose} = useDisclosure()
  const[userdata,setUserdata] = useState({});
  // const {token,isAuth} = useContext(AuthContext);
  const btnRef = React.useRef()

  let token = localStorage.getItem('Usertoken');
  let fetchUser = async()=>{
   try {
       let res = await axios.get(`https://mauve-seal-tie.cyclic.app/user/${token}`);
      //  console.log(res.data);
       setUserdata(res.data);
   } catch (error) {
       
   }
  }
  useEffect(()=>{
    if(isAuth){
      fetchUser();
    }
  },[isAuth])
  let dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setisAuth(false));
  };
  return (
    <div>
   <AccountDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} data={userdata}/>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          margin: "0",
        }}
      >
        {isAuth ? (
          <>
            <NavLink
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                fontSize: "20px",
              }}
              to="/"
            >
              Home
            </NavLink>
            <Button
              colorScheme="white"
              fontSize={18}
              mt="-3px"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Button
               ref={btnRef}
              colorScheme="white"
              fontSize={18}
              mt="-3px"
              onClick={onOpen}
            >
              MyAccount
            </Button>
          </>
        ) : (
          links.map(({ path, title }) => {
            return (
              <NavLink
                style={{
                  marginLeft: "40px",
                  marginRight: "40px",
                  fontSize: "20px",
                }}
                key={path}
                to={path}
                end
              >
                {title}
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Navbar;
