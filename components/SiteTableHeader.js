import React from 'react';
import NextLink from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex
} from '@chakra-ui/core';

import AddSiteModal from './AddSiteModal';

const SiteTableHeader = ({ children }) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/dashboard" passHref>
          <BreadcrumbLink>Sites</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>My Sites</Heading>
      <AddSiteModal>+ Add Site</AddSiteModal>
    </Flex>
  </>
);

export default SiteTableHeader;
