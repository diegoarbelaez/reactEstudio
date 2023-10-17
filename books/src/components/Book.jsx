import React from "react";
import { Link } from "react-router-dom";

import { Box, Image, Text } from "@chakra-ui/react";

export default function Book({ item }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" >
      <Link to={`/view/${item.id}`}>
        <Image
          borderRadius={10}
          boxSize="200px"
          objectFit="cover"
          src={item.cover}
          alt={item.title}
        />
       <Text 
        noOfLines={1}
        align='center'
        fontSize='md'
        maxWidth={180}
       >{item.title}</Text>
      </Link>
    </Box>
  );
}
