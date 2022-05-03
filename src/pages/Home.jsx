import React from "react";
import { Box } from "@chakra-ui/react";
import { SearchInput } from "../components/common/SearchInput";
import { Header } from "../layouts/Header";
import { SearchResults } from "../components/SearchResults";

export const Home = () => {
  return (
    <Box
      maxW="1024px"
      m="auto"
      bg="#fafafa"
      position="relative"
      fontFamily="Space Mono"
    >
      <Header />
      <SearchInput />
      <SearchResults />
    </Box>
  );
};
