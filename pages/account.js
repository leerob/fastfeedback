import { useState } from 'react';
import { Box, Button } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import { createCheckoutSession, goToBillingPortal } from '@/lib/db';
import DashboardShell from '@/components/DashboardShell';

const Account = () => {
  const { user, signout } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <DashboardShell>
      <Box>
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
        <Button
          onClick={() => {
            setBillingLoading(true);
            goToBillingPortal();
          }}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          ml={4}
          isLoading={isBillingLoading}
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Billing Portal
        </Button>
        <Button ml={4} onClick={() => signout()}>
          Log Out
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default Account;
