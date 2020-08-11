import React from 'react';
import { Box } from '@chakra-ui/core';

import Navbar from './Navbar';
import Footer from './Footer';

const MDXLayout = ({ children }) => (
  <>
    <Navbar />
    <Box maxW="600px" mx="auto" px={8}>
      {children}
    </Box>
    <Footer />
  </>
);

export default MDXLayout;
