import type { UserProfile as Profile } from '@/types/user';
import type { Vault } from '@/types/vault';
import { EncryptStorage } from 'encrypt-storage';

class EncryptLocalStorage {
  #encrypter: EncryptStorage;
  #profile: Profile;

  constructor(profile: Profile) {
    this.#profile = {
      username: profile.username,
      password: profile.password,
      avatar: profile.avatar,
    };
    this.#encrypter = new EncryptStorage(profile.password, {
      prefix: `web-totp:${profile.username}`,
      storageType: 'localStorage',
    });
  }

  saveProfile(): void {
    const encrypedPassword: string = this.#encrypter.encryptString(
      this.#profile.password,
    );
    const encrypedProfile: Profile = {
      password: encrypedPassword,
      username: this.#profile.username,
      avatar: this.#profile.avatar,
    };
    localStorage.setItem(
      `web-totp:${this.#profile.username}:profile`,
      JSON.stringify(encrypedProfile),
    );
  }

  saveVault(vault: Vault): void {
    this.#encrypter.setItem('vault', vault);
  }
}

function getEncryptedUserFromStorage(username: Profile['username']): Profile {
  const profileString: string = localStorage.getItem(
    `web-totp:${username}:profile`,
  )!;
  const profile: Profile = JSON.parse(profileString);
  return profile;
}

function getEncryptedUsersFromStorage(): Profile[] {
  const keys: string[] = Object.keys(localStorage);
  const userKeys: string[] = keys.filter((key: string): string[] | null =>
    key.match(/web-totp:.*:profile/),
  );
  return userKeys.map(
    (userKey: string): Profile => JSON.parse(localStorage.getItem(userKey)!),
  );
}

// function getUserProfile({
//   username,
//   password,
// }: Pick<Profile, 'username' | 'password'>): Profile | undefined {
//   const encrypedStorage = new EncryptStorage(password, {
//     prefix: `web-totp:${username}`,
//     storageType: 'localStorage',
//   });
//   const profile: Record<string, Profile> | undefined =
//     encrypedStorage.getItemFromPattern('profile');
//   return profile?.[username];
// }

export {
  EncryptLocalStorage,
  getEncryptedUserFromStorage,
  getEncryptedUsersFromStorage
};
