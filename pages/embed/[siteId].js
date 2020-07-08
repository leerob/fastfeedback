import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/core';

import Feedback from '@/components/Feedback';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import FeedbackLink from '@/components/FeedbackLink';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      allFeedback: feedback
    },
    unstable_revalidate: 1
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
}

const FeedbackPage = ({ allFeedback }) => {
  const router = useRouter();

  return (
    <Box
    // display="flex"
    // flexDirection="column"
    // width="full"
    // maxWidth="700px"
    // margin="0 auto"
    >
      <FeedbackLink siteId={router.query.siteId} />
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default FeedbackPage;
