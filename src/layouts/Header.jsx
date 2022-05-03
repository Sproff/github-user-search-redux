import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box>
      <HStack className="headerBg" h="30vh" w="100%" justifyContent="center">
        <Text color="#fff" fontWeight="bold" fontSize="1.8rem">
          GitHub User Search
        </Text>
      </HStack>
    </Box>
  );
};
