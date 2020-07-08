import React from 'react';
import NextLink from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex
} from '@chakra-ui/core';

const FeedbackTableHeader = ({ children }) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/feedback" passHref>
          <BreadcrumbLink>Feedback</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>My Feedback</Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
