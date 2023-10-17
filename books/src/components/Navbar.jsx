import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" padding='10px' spacing={4}>
      <Link to="/"><Button fontSize={20} border={0} margin={10}>Home</Button></Link>
      <Link to="/create"><Button fontSize={20} border={0} margin={10} colorScheme='whatsapp'>Create Book</Button></Link>
    </Box>
  );
}
