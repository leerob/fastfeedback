import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import Page from '@/components/Page';
import DashboardShell from '@/components/DashboardShell';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback.length ? (
        <FeedbackTable feedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const MyFeedbackPage = () => (
  <Page name="My Feedback" path="/feedback">
    <MyFeedback />
  </Page>
);

export default MyFeedbackPage;
