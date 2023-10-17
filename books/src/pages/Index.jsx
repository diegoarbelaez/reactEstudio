import React from "react";
import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Book from "../components/Book";

import { Box } from "@chakra-ui/react";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap={10}>
        {store.items.map((elemento) => {
          return <Book key={elemento.id} item={elemento} />;
        })}
      </Box>
    </Layout>
  );
}
