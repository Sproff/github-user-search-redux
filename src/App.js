import React from "react";
import { Home } from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
};

export default App;
