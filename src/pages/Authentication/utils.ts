import { userStateSignIn } from '@/state/user/type';
import type { UserProfile } from '@/types/user';
import { EncryptLocalStorage } from '@/utils/localStorage';

function authenticate({
  encrypedProfile: encryptedProfile,
  password,
}: {
  encrypedProfile: UserProfile;
  password: UserProfile['password'];
}): userStateSignIn {
  if (!encryptedProfile) {
    throw new Error('No user match');
  }
  const encryptStorage = new EncryptLocalStorage({
    ...encryptedProfile,
    password: password,
  });
  if (!(encryptStorage.encryptPassword() === encryptedProfile.password)) {
    throw new Error('Wrong password');
  }
  return {
    encryptStorage,
    profile: encryptStorage.getProfile(),
    vault: encryptStorage.getVault()!,
  };
}

export { authenticate };
