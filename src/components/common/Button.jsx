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
        bg="#7272d0"
        color="#fff"
        title="buttonClicked"
        _active={{
          backgroundColor: "#7272d0",
        }}
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          borderColor: "#7272d0",
          backgroundColor: "#7272d0",
          boxShadow: "none",
          color: "#fff",
        }}
      >
        Submit
      </Button>
    </div>
  );
};
