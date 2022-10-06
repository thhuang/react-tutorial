import { useAuthState, useRtdbData } from './firebase';

export const useProfile = () => {
  const [user] = useAuthState();

  console.log(user?.uid);
  const path = `/admin/${user?.uid || 'guest'}`;
  const [isAdmin] = useRtdbData(path, user);
  return [{ user, isAdmin }];
};
