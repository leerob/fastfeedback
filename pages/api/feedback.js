import { auth } from '@/lib/firebase-admin';
import { getUserFeedback } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { feedback } = await getUserFeedback(uid);

    res.status(200).json({ feedback });
  } catch (error) {
    res.status(500).json({ error });
  }
};
