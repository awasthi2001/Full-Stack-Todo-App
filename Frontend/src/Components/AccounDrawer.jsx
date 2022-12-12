import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
  } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setisAuth } from '../Redux/AuthRedux/action';

export function AccountDrawer({btnRef,isOpen,onClose,data}) {
   // const { isOpen, onClose } = useDisclosure()
    // const btnRef = React.useRef()
    let dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(setisAuth(false));
      onClose();
    };
    return (
      <>
        {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Hello {data.Full_Name}</DrawerHeader>
  
            <DrawerBody>
              Email id : {data.Email_Id}
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Back
              </Button>
              <Button colorScheme='red' onClick={handleLogout}>Log Out</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }