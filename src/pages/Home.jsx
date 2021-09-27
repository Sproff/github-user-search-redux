import React from "react";
import { Box } from "@chakra-ui/react";
import { SearchInput } from "../components/common/SearchInput";
import { Header } from "../layouts/Header";
import { SearchResults } from "../components/SearchResults";

export const Home = () => {
  return (
    <Box bg="#fafafa" position="relative">
      <Header />
      <SearchInput />
      <SearchResults />
    </Box>
  );
};
