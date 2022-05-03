import React from "react";
import { Button } from "@chakra-ui/react";

export const SubmitButton = ({ searchUsers }) => {
  return (
    <div>
      <Button
        p=".5rem"
        size="sm"
        fontSize=".9rem"
        onClick={searchUsers}
        bg="#b9b9d0"
        color="#fff"
        title="buttonClicked"
        _active={{
          backgroundColor: "#b9b9d0",
        }}
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          borderColor: "#b9b9d0",
          backgroundColor: "#b9b9d0",
          boxShadow: "none",
          color: "#fff",
        }}
      >
        Submit
      </Button>
    </div>
  );
};
