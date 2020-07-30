import React from 'react';
import NextLink from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box
} from '@chakra-ui/core';

const SiteHeader = ({ siteName }) => (
  <Box mx={4}>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/sites" passHref>
          <BreadcrumbLink>Sites</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>{siteName || '-'}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>{siteName || '-'}</Heading>
    </Flex>
  </Box>
);

export default SiteHeader;
