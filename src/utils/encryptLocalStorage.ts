import type { User } from '@/types/user';
import type { Vault } from '@/types/vault';
import { EncryptStorage } from 'encrypt-storage';

class EncryptLocalStorage {
  #encrypter;

  constructor({ username, password }: Pick<User, 'username' | 'password'>) {
    if (!username || !password) {
      throw new Error("Username or Password isn't set");
    }
    this.#encrypter = new EncryptStorage(password, {
      prefix: `web-totp:${username}`,
      storageType: 'localStorage',
    });
  }

  encrypt({ profile, vault }: { profile?: User; vault?: Vault }) {
    if (profile) {
      this.#encrypter.setItem('profile', profile);
    }
    if (vault) {
      this.#encrypter.setItem('profile', vault);
    }
  }
}

export { EncryptLocalStorage };
