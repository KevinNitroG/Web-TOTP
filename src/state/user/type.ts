import type { userState } from '@/state/user/userSlice';

export type userStateSignIn = Omit<userState, 'isSignIn'>;
