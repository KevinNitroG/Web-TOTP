import { userStateSignIn } from '@/state/user/type';
import type { UserProfile } from '@/types/user';
import {
  EncryptLocalStorage,
  getEncryptedUserProfileFromStorage as getEncryptedProfile,
} from '@/utils/localStorage';

function authenticate({
  username,
  password,
}: {
  username: UserProfile['username'];
  password: UserProfile['password'];
}): userStateSignIn {
  const encrypedProfile: UserProfile | null = getEncryptedProfile(username);
  if (!encrypedProfile) {
    throw new Error('No user match');
  }
  const encryptStorage = new EncryptLocalStorage({
    ...encrypedProfile,
    password: password,
  });
  if (!(encryptStorage.encryptPassword() === encrypedProfile.password)) {
    throw new Error('Wrong password');
  }
  return {
    encryptStorage,
    profile: encryptStorage.getProfile(),
    vault: encryptStorage.getVault()!,
  };
}

export { authenticate };
