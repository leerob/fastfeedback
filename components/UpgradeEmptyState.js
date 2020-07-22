import React, { useState } from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import { createCheckoutSession } from '@/lib/db';

const UpgradeEmptyState = () => {
  const { user } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);

  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        Get feedback on your site instantly.
      </Heading>
      <Text mb={4}>Start today, then grow with us 🌱</Text>
      <Button
        onClick={() => {
          setCheckoutLoading(true);
          createCheckoutSession(user.uid);
        }}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        isLoading={isCheckoutLoading}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Upgrade to Starter
      </Button>
    </Flex>
  );
};

export default UpgradeEmptyState;
