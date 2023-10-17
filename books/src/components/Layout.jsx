import React from "react";
import Navbar from "./Navbar";

import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" width="100%" height="100%" padding='50px'>
      <Navbar />
      <div>{children}</div>
    </Box>
  );
}
