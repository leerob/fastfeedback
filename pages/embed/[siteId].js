import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/core';

import Feedback from '@/components/Feedback';
import FeedbackLink from '@/components/FeedbackLink';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback
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
    fallback: true
  };
}

const EmbeddedFeedbackPage = ({ initialFeedback }) => {
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="column" width="full">
      <FeedbackLink siteId={router.query.siteId} />
      {initialFeedback &&
        initialFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
    </Box>
  );
};

export default EmbeddedFeedbackPage;
