import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, InputRightElement, Input, HStack } from "@chakra-ui/react";

import { SubmitButton } from "./Button";
import instance from "../../queries/axios.config";
import { getUserError, getUserSuccess } from "../../redux/actions/action";

export const SearchInput = () => {
  const [login, setLogin] = useState("");

  const dispatch = useDispatch();

  const searchUsers = async () => {
    try {
      const { data } = await instance.get(`/users?q=${login}`);
      dispatch(getUserSuccess(data.items));
    } catch (error) {
      dispatch(getUserError(error.message));
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
          placeholder="Search for a github user"
          border="none"
          focusBorderColor="none"
          fontSize="1rem"
          title="searchInput"
          _placeholder={{
            fontSize: [".8rem", "1rem"],
          }}
        />
        <InputRightElement width="4.5rem" h="100%" mr="1rem">
          <SubmitButton type="submit" searchUsers={searchUsers} />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};
