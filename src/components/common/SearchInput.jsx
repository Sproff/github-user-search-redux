import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, InputRightElement, Input, HStack } from "@chakra-ui/react";
import { SubmitButton } from "./Button";
import instance from "../../queries/axios.config";
import { getUsersSuccess } from "../../redux/actions/success";
import { getUsersFailed } from "../../redux/actions/error";

export const SearchInput = () => {
  const [login, setLogin] = useState("");
  
  const dispatch = useDispatch();


  const searchUsers = async () => {
    try {
      const { data } = await instance.get(`/users?q=${login}`);
      dispatch(getUsersSuccess(data));
    } catch {
      dispatch(getUsersFailed());
    }
  };

  return (
    <HStack spacing={4} justifyContent="center">
      <InputGroup
        boxShadow="xl"
        w={["80%", "80%", "60%", "50%"]}
        bg="#fff"
        top="-27px"
        borderRadius="5px"
      >
        <Input
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          type="search"
          placeholder="Search for a user"
          border="none"
          focusBorderColor="none"
          fontSize="1rem"
          title="searchInput"
        />
        <InputRightElement width="4.5rem" h="100%" mr="1rem">
          <SubmitButton searchUsers={searchUsers} />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};
