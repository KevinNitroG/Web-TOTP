import type { Vault } from '@/types/vault';

export type User = {
  username: string | null;
  password: string | null;
  vault: Vault | null;
  avatar: string | null;
};

export type Users = User[];
