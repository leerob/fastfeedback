import React from 'react';
import {
  Box,
  Button,
  Code,
  Tag,
  TagLabel,
  Flex,
  Stack,
  FormLabel,
  Switch
} from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import DeleteButton from './DeleteButton';

const FeedbackTable = (props) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th width="50px">{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {props.feedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{feedback.route || '/'}</Code>
            </Td>
            <Td>
              <Switch
                id="email-alerts"
                color="green"
                defaultIsChecked={feedback.status === 'active'}
              />
            </Td>
            <Td>
              <DeleteButton />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
