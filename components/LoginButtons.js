import { Button, Stack } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <Stack isInline>
      <Button
        onClick={() => auth.signinWithGitHub()}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        leftIcon="github"
        mt={4}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Sign In with GitHub
      </Button>
      <Button
        onClick={() => auth.signinWithGoogle()}
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        leftIcon="google"
        mt={4}
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)'
        }}
      >
        Sign In with Google
      </Button>
    </Stack>
  );
};

export default LoginButtons;
