import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box>
      <HStack
        bg="linear-gradient(45deg, #9494bb, #4d4d96)"
        h="30vh"
        w="100%"
        justifyContent="center"
      >
        <Text
          color="#fff"
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="1.5rem"
        >
          GitHub Search
        </Text>
      </HStack>
    </Box>
  );
};
