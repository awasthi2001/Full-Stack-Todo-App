import { Box, Button, Input, InputGroup, InputRightElement, position, useToast } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from '../Redux/AuthRedux/action'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const Login = () => {
    const [show, setShow] = React.useState(false)
    const toast = useToast();
    let navigate = useNavigate();
    const [password,setPassword]  = useState("");
    const [email,setEmail]  = useState("");
    let{loading,error,isAuth} = useSelector(state=>state.Auth);
    let dispatch  = useDispatch();
    const handleClick = () => setShow(!show)
    useEffect(()=>{
      if(isAuth){
        return navigate('/');
      }
    },)
    function handleToast(){
      if(error){
        toast({
             title: 'Error',
             description: "Something went wrong! please try again later",
             status: 'error',
             duration: 9000,
             isClosable: true,
           })
     }
      if(isAuth){
        toast({
            title: 'successfully Logged in',
            description:"",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          return navigate('/');
    }
    }
  return (
    <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' width='35%' display='block' margin='auto' marginTop='200px' p='20px' borderRadius='5px'  >
<FormControl >
  <FormLabel>Email address</FormLabel>
  <Input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <FormLabel>Password</FormLabel>
  <InputGroup size='md'>
      <Input
        pr='4.5rem'
        size='md'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
</FormControl>
  <Button isLoading={loading} mt='2' colorScheme='teal' onClick={()=>{
    let obj = {
        Email_Id : email,
        Password : password
    }
    dispatch(handleLogin(obj))
    handleToast();
  }}>Login</Button>
    </Box>
  )
}
