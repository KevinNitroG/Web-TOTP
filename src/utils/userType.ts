import { Vault } from '@utils/vaultType';

export type User = {
  username: string;
  password: string;
  valt: Vault;
  avatar: string;
};

export type Users = User[];
