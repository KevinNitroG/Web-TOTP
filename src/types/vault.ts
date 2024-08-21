export type VaultItem = {
  id: string;
  issuer: string;
  name: string;
  secret: string;
  simpleIcons: boolean;
};

export type Vault = VaultItem[];
