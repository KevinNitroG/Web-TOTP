import type { UserProfile as Profile } from '@/types/user';
import type { Vault } from '@/types/vault';
import { EncryptStorage } from 'encrypt-storage';

// TODO: maybe we need to make it not to have profile property
class EncryptLocalStorage {
  #encrypter: EncryptStorage;
  #profile: Profile;

  constructor(profile: Profile) {
    this.#profile = {
      username: profile.username,
      password: EncryptLocalStorage._makeSecretKeyBeValid(profile.password),
      avatar: profile.avatar,
    };
    this.#encrypter = new EncryptStorage(profile.password, {
      prefix: `web-totp:${profile.username}`,
      storageType: 'localStorage',
    });
  }

  getProfile(): Profile {
    return this.#profile;
  }

  encryptPassword(): string {
    return this.#encrypter.encryptString(this.#profile.password);
  }

  saveProfile(): void {
    const encrypedPassword = this.encryptPassword();
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

  getVault(): Vault | null {
    return (this.#encrypter.getItem('vault') as Vault) || null;
  }

  // TODO: Not done yet, it always returns undefined
  static _makeSecretKeyBeValid(key: string): string {
    const generator: () => () => string = (): (() => string) => {
      let idx: number = 0;
      return (): string => {
        const char: string = key[key.length % idx];
        idx++;
        return char;
      };
    };

    const extender: () => string = generator();

    while (key.length < 10) {
      key += extender();
    }
    return key;
  }
}

function getEncryptedUserProfileFromStorage(
  username: Profile['username'],
): Profile | null {
  const profileString: string | null = localStorage.getItem(
    `web-totp:${username}:profile`,
  );
  if (!profileString) {
    return null;
  }
  const profile: Profile = JSON.parse(profileString);
  return profile;
}

function getUsernamesFromStorage(): string[] {
  const keys: string[] = Object.keys(localStorage);
  const usernames: string[] = keys.filter((key: string): string[] | null =>
    key.match(/web-totp:.*:profile/),
  );
  return usernames;
}

function getEncryptedUserProfilesFromStorage(): Profile[] {
  const usernames: string[] = getUsernamesFromStorage();
  return usernames.map(
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
  getEncryptedUserProfileFromStorage,
  getEncryptedUserProfilesFromStorage,
  getUsernamesFromStorage
};
