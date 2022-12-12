import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAndUpdate, postData } from "../Redux/action";

export const TodoInput = ({ page }) => {
  const toast = useToast();
  const [value, setvalue] = useState("");
  let dispatch = useDispatch();
  const handleInput = (e) => {
    setvalue(e.target.value);
  };
  let User_Id = localStorage.getItem("User_Id");
  const handleAdd = () => {
    if (value == "") {
      toast({
        title: "Error",
        description: "Please enter Something to add",
        status: "error",
        position : "top",
        duration: 9000,
        isClosable: true, 
      });
    } else {
      let todo = {
        status: false,
        task: value,
        User_Id: User_Id,
      };
      setvalue((value)=>"");
      dispatch(postData(todo, page));
      toast({
        title: "Successfully Added",
        description: "",
        status: "success",
        position : "top",
        duration: 9000,
        isClosable: true, 
      });
     
    }

    //dispatch(fetchAndUpdate(page))
  };

  return (
    <div>
      <Input type="text" w='65%' mt='5' mr='5' ml='5' borderColor='green' border='2px' value={value} onChange={handleInput} />
      <Button colorScheme='green' mt='-2' onClick={handleAdd}>
        ADD
      </Button>
    </div>
  );
};
