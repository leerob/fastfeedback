import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Icon color="black" name="logo" size="64px" />
      {auth.user ? (
        <Button as="a" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
