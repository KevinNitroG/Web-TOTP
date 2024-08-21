import { Vault } from '@/types/vault';

export type User = {
  username: string;
  password: string;
  valt: Vault;
  avatar: string;
};

export type Users = User[];
