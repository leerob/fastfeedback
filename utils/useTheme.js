import { useRouter } from 'next/router';

export const useTheme = () => {
  const { query } = useRouter();

  return query?.theme || 'light';
};
