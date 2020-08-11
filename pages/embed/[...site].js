import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/core';
import 'iframe-resizer/js/iframeResizer.contentWindow';

import Feedback from '@/components/Feedback';
import FeedbackLink from '@/components/FeedbackLink';
import { getAllFeedback, getAllSites, getSite } from '@/lib/db-admin';
import { useTheme } from '@/utils/useTheme';

export async function getStaticProps(context) {
  const [siteId, route] = context.params.site;
  const { feedback } = await getAllFeedback(siteId, route);
  const { site } = await getSite(siteId);

  return {
    props: {
      initialFeedback: feedback,
      site
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      site: [site.id.toString()]
    }
  }));

  return {
    paths,
    fallback: true
  };
}

const EmbeddedFeedbackPage = ({ initialFeedback, site }) => {
  const router = useRouter();
  const colorMode = useTheme();
  const textColor = {
    light: 'gray.900',
    dark: 'gray.200'
  };

  return (
    <Box display="flex" flexDirection="column" width="full">
      <FeedbackLink paths={router?.query?.site || []} />
      {initialFeedback?.length ? (
        initialFeedback.map((feedback, index) => (
          <Feedback
            key={feedback.id}
            settings={site?.settings}
            isLast={index === initialFeedback.length - 1}
            {...feedback}
          />
        ))
      ) : (
        <Text color={textColor[colorMode]}>
          There are no comments for this site.
        </Text>
      )}
    </Box>
  );
};

export default EmbeddedFeedbackPage;
