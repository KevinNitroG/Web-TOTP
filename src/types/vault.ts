export type VaultItem = {
  name: string;
  secret: string;
  issuer: string;
  simpleIcons: boolean;
};

export type Vault = VaultItem[];
