import React from 'react';
import { Box } from '@chakra-ui/core';

import Navbar from './Navbar';
import Footer from './Footer';

const DocsLayout = ({ children }) => (
  <>
    <Navbar />
    <Box maxW="650px" mx="auto" px={8}>
      {children}
    </Box>
    <Footer />
  </>
);

export default DocsLayout;
